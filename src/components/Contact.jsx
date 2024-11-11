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

      <div className="relative inline-block bg-blue-500 rounded">
        <a href="mailto:brianmichaeladero@gmail.com">
          <button className="relative border bg-gray-600 border-blue-400 px-4 py-2 text-white rounded font-semibold   transition-transform duration-200 transform hover:-translate-y-1 hover:-translate-x-1">
            Click here to send message
          </button>
        </a>
      </div>
    </main>
  );
};

export default Contact;
