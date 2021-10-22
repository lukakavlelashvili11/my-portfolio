<template>
  <div class="contact">
      <div class="contact__inner">
        <ul class="contact-list">
            <li class="contact-list-item">
                <img src="../assets/img/place.png"/>
                <span>Tbilisi, Georgia</span>
            </li>
            <li class="contact-list-item">
                <img src="../assets/img/email.png"/>
                <span>lukakavlelashvili10@gmail.com</span>
            </li>
            <li class="contact-list-item">
                <img src="../assets/img/smartphone.png"/>
                <span>598 44 16 04</span>
            </li>
        </ul>
        <div class="contact-form">
            <form class="contact-form__inner">
                <input class="email-input" placeholder="Email"/>
                <textarea class="message-input" placeholder="Message"/>
                <button class="send-button">Send</button>
            </form>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.contact{
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    margin-top: 150px;
    left: 0;
    right: 0;
    height: 500px;
    width: 40%;
}
.contact-list{
    list-style: none;
    padding: 0px;
}
.contact-list .contact-list-item{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 15px;
    font-family: 'Roboto', sans-serif;
}
.contact-list .contact-list-item img{
    width: 21px;
}
.contact-list .contact-list-item span{
    margin-left: 5px;
}
.contact__inner{
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
}
.contact-form .contact-form__inner{
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
}
.contact-form .contact-form__inner *{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
    background: none;
    border: 1px solid black;
    border-radius: 10px;
    width: 300px;
    outline: none;
    font-size: 16px;
}
.contact-form .contact-form__inner .email-input{
    height: 30px;
    padding: 10px;
}
.contact-form .contact-form__inner .message-input{
    height: 60px;
    padding: 10px;
}
.contact-form .contact-form__inner .send-button{
    width: 320px;
    height: 30px;
    cursor: pointer;
}
.send-button:hover{
    background: rgb(206, 186, 149);
}
</style>