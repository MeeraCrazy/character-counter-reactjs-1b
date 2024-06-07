import {Component} from 'react'
import {v4} from 'uuid'
import UserInput from '../UserInput'

import {
  BgContainer,
  LeftPannel,
  InfoCardContainer,
  Info,
  RightPannel,
  CounterHeading,
  AddInputContainer,
  Input,
  AddInputButton,
  UserInputList,
  EmptyImage,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {
    userInputList: [],
    userInput: '',
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state

    const newUserInput = {
      id: v4(),
      userEnteredText: userInput,
      textLength: userInput.length,
    }

    this.setState(prevState => ({
      userInputList: [...prevState.userInputList, newUserInput],
      userInput: '',
    }))
  }

  renderUserInput = () => {
    const {userInputList} = this.state

    return userInputList.length === 0 ? (
      <EmptyImage
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    ) : (
      userInputList.map(eachUser => (
        <UserInput key={eachUser.id} userInputDetails={eachUser} />
      ))
    )
  }

  render() {
    const {userInput} = this.state
    return (
      <BgContainer>
        <LeftPannel>
          <InfoCardContainer>
            <Info>Count the characters like a Boss...</Info>
          </InfoCardContainer>
          <UserInputList>{this.renderUserInput()}</UserInputList>
        </LeftPannel>
        <RightPannel>
          <CounterHeading>Character Counter</CounterHeading>
          <AddInputContainer onSubmit={this.onAddUserInput}>
            <Input
              type="text"
              value={userInput}
              placeholder="Enter the Characters here"
              onChange={this.onChangeUserInput}
            />
            <AddInputButton type="submit">Add</AddInputButton>
          </AddInputContainer>
        </RightPannel>
      </BgContainer>
    )
  }
}

export default CharacterCounter
