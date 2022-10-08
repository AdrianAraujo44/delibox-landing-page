import { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

import {
  Container,
  Title,
  Answer
} from './styles'

interface IQuestion {
  title: string
  answer: string
}

function Question ({title, answer}: IQuestion) {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <Container>
      <Title onClick={() => setShowAnswer(!showAnswer)} showAnswer={showAnswer}>
        <strong>{title}</strong>
        {
          showAnswer ? <IoMdArrowDropup size={25} /> : <IoMdArrowDropdown size={25} />
        }
        
      </Title>
      {
        showAnswer && (
          <Answer>
            <p>{answer}</p>
          </Answer>
        )
      }
      
    </Container>
  )
}

export default Question