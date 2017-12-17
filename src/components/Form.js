import React, { Component } from 'react'
import '../styles/Form.css'

class Form extends Component {
    state = {
        title: '',
        desc: ''
    }

    // Чтение данных с localStorage
    getStorage(key, defaultValue) {
        let value = window.localStorage.getItem(key)

        let decoded = JSON.parse(value)

        if (decoded) {
            return decoded
        }

        return false
    }

    // Добавление стейта в localStorage
    setStorage(key, value) {
        let arr = this.getStorage(key, value) || []
        arr.push(value)
        window.localStorage.setItem(
            key, JSON.stringify(arr)
        )
    }

    // Уникальный id каждой статье
    setID() {
        return {
            id: this.props.postList.length + 1
        }
    }

    // Добавление поста на страницу и в store
    addPost(e) {
        let newID = this.setID()
        e.preventDefault()
        this.props.addPost({
            id: newID.id,
            title: this.state.title,
            desc: this.state.desc
        })
        let stateAndId = Object.assign({}, this.state, newID)
        this.setStorage("posts", stateAndId)
        this.clearInputs()
    }

    // Очистка инпутов
    clearInputs() {
        this.textTextarea.value = ''
        this.textInput.value = ''
    }

    // Установка инпутов по мере введения пользователем
    changeInputs(data) {
        let state = this.state
        let name = data.target.name
        state[name] = data.target.value
        this.setState(state)
    }

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.addPost.bind(this)} className="form">
                    <h2 className="form__form-title">Форма создания поста</h2>
                    <input 
                        onChange={this.changeInputs.bind(this)}
                        type="text" name="title"
                        className="form__form-input form__form-ctrl"
                        placeholder="Название поста"
                        required
                        ref={(input) => { this.textInput = input }}
                    />
                    <textarea
                        onChange={this.changeInputs.bind(this)}
                        name="desc" className="form__form-textarea form__form-ctrl"
                        rows="10"
                        placeholder="Содержание поста"
                        required
                        ref={(textarea) => { this.textTextarea = textarea }}
                    >
                    </textarea>
                    <button className="form__btn">Создать пост</button>
                </form>
            </div>
        );
    }
  }
  
  export default Form