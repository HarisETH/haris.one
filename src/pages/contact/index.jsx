import React from "react"
import styles from "@/styles/Home.module.css"


// UI imports

import { Input, Spacer, useInput, Textarea } from "@nextui-org/react";

const index = () => {
    const { value, reset, bindings } = useInput("");
  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "E-Mail looks great 😍" : "Enter a valid email 😏",
      color: isValid ? "success" : "error",
    };
  }, [value]);


  const lableText = (
    <p className="font-bold border-r-0 tracking-wide">twitter.com/</p>
  )

  return (
    <main className="font-inter flex flex-col px-8 pt-24 h-full">


      <header>


      </header>


      <section className="h-full flex flex-col w-full gap-20">
        <div className="gap-2">
          <h1 className="fon font-black text-3xl sm:text-5xl">
            Love to hear from you
          </h1>
          <h2 className="fon font-black text-3xl sm:text-5xl">
            Get in Touch 👋🏼
          </h2>
        </div>

        <div className="contact-section flex flex-col gap-16 pr-16">
          <Input clearable underlined required="true"  labelPlaceholder="Your Name" />

          <Input
            {...bindings}
            onClearClick={reset}
            status={helper.color}
            color={helper.color}
            helperColor={helper.color}
            helperText={helper.text}
            clearable
            underlined required="true" 
            labelPlaceholder="Your E-Mail"
          />
          <Input className="spanner" clearable underlined labelLeft={lableText} placeholder="Your Twitter Handle" />

          <Textarea
          underlined
          color="black"
          labelPlaceholder="Your Message goes here"
          maxRows={4}
        />

        </div>
      </section>
    </main>
  );
};

export default index;
