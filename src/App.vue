<script setup>

</script>

<template>
  <div class=" body-style lg:py-[15vh]">
    <article class=" lg:overflow-hidden lg:h-[70vh] lg:w-[65vw]  lg:flex ">
      <header class=" lg:w-[350px] lg:bg-desktop lg:bg-right lg:sticky ">
        <img class=" top-image -translate-y-[60%] lg:hidden" src="../faq-accordion-card-main/images/illustration-woman-online-mobile.svg" alt="">
        <img class=" top-image -translate-y-[175%] lg:hidden " src="../faq-accordion-card-main/images/bg-pattern-mobile.svg" alt="">
        <img class=" hidden  lg:block md:w-[450px] lg:-ml-[80px] lg:mt-[50%]  max-w-none" src="../faq-accordion-card-main/images/illustration-woman-online-desktop.svg" alt="">
        
      </header>
      <main class="lg:my-auto lg:mx-auto">
        <h1 class=" lg:text-left lg:text-5xl">FAQ</h1>
        <ul class=" min-w-[30vw]">
          <li class=" lg:ml-0 " @click="item.state = !item.state" v-for="(item,index) in items" :key="`item-${index}`">
            <div class="flex">
              <h2 :class="{'font-bold' : item.state, 'font-normal' : !item.state }">{{ item.question }}</h2>
              <img :class="{'rotate-180' : item.state}"  class=" chevron " src="../faq-accordion-card-main/images/icon-arrow-down.svg" alt="">
            </div>
            <p :class="{ 'visible' : item.state, 'hidden' : !item.state }">{{ item.answer }}</p>
            <hr>
          </li>
        </ul>

      </main>
    </article>
    

  </div>
</template>

<script>


export default{
    data() {
      return {
        msg: 'Hello World!',
        items:[
           {state: false, question: 'How many team members can I invite?', answer: 'As many as you want!'},
           {state: false, question: 'What is the maximum file upload size?', answer: 'No more than 2GB. All files in your account must fit your allotted storage space.'},
           {state: false, question: 'How do I reset my password', answer: 'Write an email to our support.'},
           {state: false, question: 'Can I cancel my subscription?', answer: 'No. Our subscription is eternal. You basically signed the deal with the devil.'},
           {state: false, question: 'Do you provide additional support?', answer: 'Not at all. Our company has a simple philosophy: We dont care.'},
        ]
      }
    },
  }
</script>


