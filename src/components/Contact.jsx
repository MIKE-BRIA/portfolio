const Contact = () => {
  return (
    <main
      id="contact"
      className=" p-8 max-w-large m-auto flex flex-col items-center "
    >
      <h1 className="text-4xl my-6 font-serif font-bold">Get In Touch</h1>
      <p className="text-center w-10/12 md:w-6/12 text-lg mb-6">
        Am currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, i will try my best
        to get back to you!
      </p>

      <a href="mailto:michaelbrian466@gmail.com">
        <button className="border border-blue-400 text-white px-4 py-2 rounded hover:bg-blue-900">
          Click here to send message
        </button>
      </a>
    </main>
  );
};

export default Contact;
