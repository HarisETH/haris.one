import React, {useRef, useState, useEffect} from "react";
import styles from "@/styles/Home.module.css";
import * as Icon from "react-feather";
import emailjs from '@emailjs/browser';
// UI imports
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { Input, Modal, useInput,Text , Row, Checkbox, Button , Textarea } from "@nextui-org/react";




const Loading = () => {

  const [senderName, setSenderName] = useState("");
  const [ message_value, setMessage] = useState("");
  const [twitterid, setTwitter] = useState("");
  const [ emailid, setEmailId ] = useState("");

  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const [disabledText, setDisabled] = useState(true);
  const [enableBtn, setenableBtn] = useState(false)

  const { value, reset, bindings } = useInput("");
  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

 
  const isValid = validateEmail(value);
  const helper = React.useMemo(() => {
    setEmailId(value)
    if (!value)
      return {
        text: "",
        color: "",
      };
    

    
    return {
      text: isValid ? "E-Mail looks great 😍" : "Enter a valid email 😏",
      color: isValid ? "success" : "error",
    };
  }, [value]);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };


  const btnHelper = useEffect(() => {

    if(senderName.length < 1 || message_value.length < 1 || value.length<5){
      setDisabled(true)
      console.log('hello')
    }else{
      setDisabled(false)
    }

  }, [senderName, message_value, emailid])




  function contactSender(e){
    e.preventDefault()

   handler()

  


    let template_params = {
      "name": senderName,
      "email" : emailid,
      "message": message_value,
      "twitter_id": twitterid
    }
    

    


    let service_id = "service_phfssuo";
    let template_id = "template_hp2x6yb";
    emailjs.send(service_id, template_id, template_params, process.env.EMAIL_KEY);
  }
  

  const lableText = (
    <p className="font-bold border-r-0 tracking-wide">twitter.com/</p>
  );


  

  return (
    <main className={`flex flex-col justify-center items-center px-4 m-0  h-full min-h-screen w-full py-24 ${inter.className}`}>
      <section className="section flex justify-center items-center w-full md:max-w-5xl">
        

        <section className="h-full flex flex-col w-full gap-20">
          <div className="gap-2">
            <h1 className="fon font-bold tracking-tighter text-4xl sm:text-5xl ">
              Love to hear from you
            </h1>
            <h2 className="fon font-bold tracking-tighter text-4xl sm:text-5xl ">
              Get in Touch 👋🏼
            </h2>
          </div>

          <form  onSubmit={contactSender} className="contact-section w-full flex flex-col gap-20 pr-16">
          
            <Input
            
            onChange={(e)=> {
              setSenderName(e.target.value)
              console.log(senderName)
            }}
            fullWidth="true"
              clearable
              underlined
              required="true"
              labelPlaceholder="Your Name*"
            />

            <Input
            
             fullWidth
              {...bindings}
              onClearClick={reset}
              status={helper.color}
              color={helper.color}
              helperColor={helper.color}
              helperText={helper.text}
              clearable
              underlined
              required="true"
              labelPlaceholder="Your E-Mail*"
            />
            <Input
            onChange={(e)=> {
              setTwitter(e.target.value)
            }}
             fullWidth
              className="spanner"
              clearable
              underlined
              labelLeft={lableText}
              placeholder="Your Twitter Handle"
            />

            <Textarea
            onChange={(e)=> {
              setMessage(e.target.value)
              
            }}
            fullWidth
              underlined
              color="black"
              labelPlaceholder="Your Message goes here*"
              maxRows={4}
            />

            <button disabled={disabledText} type="submit" className="w-full md:w-1/4 self-center md:self-start py-4 bg-black disabled:opacity-20 disabled:hover:scale-100 disabled:hover:shadow-none font-inter gap-2 text-white font-bold text-xl flex items-center justify-center hover:scale-95 transition-all ease-linear hover:shadow-sm hover:shadow-zinc-900">
              <span className="hover:drop-shadow-md hover:shadow-white">Send a Raven</span> <Icon.ArrowUpRight></Icon.ArrowUpRight>
            </button>
            
          </form>

          <Modal
          className="font-inter"
          
          css={{
            background: 'rgb(59 130 246)',
            color: 'white'
          }}
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          
        }} >
          <Icon.Info ></Icon.Info>
          <p className="font-bold  tracking-wide px-2 text-white text-2xl">Send Successful</p>
        </Modal.Header>

        <Modal.Body>
          <p className="text-xl  font-normal text-white">
            You're Raven has been successfully sent! You will receive a reply within a day. Have a great day ahead !
          </p>
        </Modal.Body>
        
        <Modal.Footer>
         
          <Button auto onPress={closeHandler}>
            Sure, Continue!
          </Button>
        </Modal.Footer>
      </Modal>


        </section>
      </section>
    </main>
  );
};

export default Loading;
