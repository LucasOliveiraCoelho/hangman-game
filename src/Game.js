import React, { Component } from 'react'
import './Game.css'

class Game extends Component {
    constructor(props){
        super(props)
        this.state = {
            erro: 0,
            secretWord: ['T','E','S','T','E'],
            wordView: ['_ ','_ ','_ ','_ ','_ '],
            charErro: '',
            charValidation: ''
        }
        console.log(this.state.secretWord.length)
    }

    handleChangeValidation = e => {
        const value = e.target.value.toUpperCase()
        this.setState({
            charValidation: value
        })
    }
    handleSubmitValidation = e => {
        e.preventDefault()
        
        let valueChar = this.state.charValidation // user digitou
        let secretWord = this.state.secretWord    // palavra a ser decifrada
        let wordView = this.state.wordView        // array que mostra para o jogador 

        let viewArray = secretWord.map((val,i) =>
            {
                if(val === valueChar && val !== wordView[i]){
                    return val
                }else if(val === wordView[i]){
                    return wordView[i]
                }else{
                    return '_ '
                }
            }
        )

        this.setState({
            charValidation: '',
            wordView: viewArray
        })
    }

    render(){
        return(
            <div className='Game'>
                <h3>Advinha a palavra secreta.</h3>
                <p>Palavra secreta: {this.state.secretWord} </p>
                <p>Numero de erros: {this.state.erro}</p>
                <p>Palavra visualização: {this.state.wordView}</p>
                <p>Caracteres errados: {this.state.charErro}</p>
                <p>Char validation: {this.state.charValidation}</p>
                <form onSubmit={this.handleSubmitValidation}>
                    <input type='text' value={this.state.charValidation} onChange={this.handleChangeValidation} name='teste' />
                </form>
            </div>
        )
    }
}

export default Game