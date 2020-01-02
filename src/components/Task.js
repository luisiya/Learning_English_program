import React, {
  useState, Fragment, useRef,
} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
  unitText: {
    width: '44%',
    margin: '40px auto',
    padding: '37px',
  },
  word: {
    color: '#3f51b5',
  },
  taskBtn: {
    marginTop: '20px',
  },
  answerWrapper: {
    fontSize: '22px',
    width: '53%',
    margin: '40px auto',
  },
}));

const textUnit = 'Как будет на английском слово:  ';
const checkText = 'Проверить';
const tryAgainText = 'cыграть еще!';

export const Task = () => {
  const classes = useStyles();
  const [taskText, setTaskText] = useState(textUnit);
  const [correctAnswersCount, setcorrectAnswersCount] = useState(0);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const [btnTitle, setBtnTitle] = useState(checkText);
  const [answer, setAnswer] = useState('');
  const [showWord, setShowWord] = useState(true);

  const words = useSelector(state => state.list.shuffleWords);
  const translates = useSelector(state => state.list.translates);
  const textInput = useRef();

  const getInputValue = (e) => {
    setAnswer(e.target.value);
  };

  const next = () => {
    if (count < words.length - 1) {
      setTaskText(textUnit);
      setBtnTitle(checkText);
    } else {
      setTaskText(`Игра закончена! \n Твои результаты: \n правильно ${correctAnswersCount}\n неправильно ${words.length - correctAnswersCount}`);
      setBtnTitle(tryAgainText);
      setShow(false);
    }
  };

  const taskCheck = () => {
    setShow(true);
    setShowWord(true);
    if (btnTitle === checkText) {
      if (answer !== '') {
        if (answer.toLowerCase() === translates[words[count]]) {
          setTaskText('Это правильный ответ!');
          setcorrectAnswersCount(correctAnswersCount + 1);
          setShow(false);
          setShowWord(false);
        } else {
          setTaskText(`Неправильный ответ. Корректно писать ${translates[words[count]]}`);
          setShow(false);
          setShowWord(false);
        }
        setCount(count + 1);
        textInput.current.value = '';
        setBtnTitle('далее');
        setAnswer('');
      } else {
        setTaskText(`${'Нужно что-то ввести.\n'}${textUnit}`);
      }
    } else if (btnTitle === tryAgainText) {
      setShow(false);
      setShowWord(false);
      window.location.reload();
    } else {
      next();
    }
  };

  const checkKeyPress = (e) => {
    console.log(e.target.value);
    if (e.charCode === 13 && e.target.value !== '') {
      taskCheck();
    }
  };

  return (
    <Fragment>
      <Paper className={classes.unitText}>
        <Typography variant="h6" component="h6">
          {taskText}
          <span className={classes.word}>{show ? words[count] : ''}</span>
        </Typography>
      </Paper>
      <form className={classes.answerWrapper} onKeyPress={checkKeyPress} noValidate autoComplete="off">
        {show ? <TextField className={classes.answerText} autoFocus onChange={getInputValue} inputRef={textInput} fullWidth id="outlined-basic" label="Ваш ответ" variant="outlined" /> : ''}
        <Button className={classes.taskBtn} variant="contained" color="primary" onClick={taskCheck}>{btnTitle}</Button>
      </form>
    </Fragment>
  );
};

export default Task;
