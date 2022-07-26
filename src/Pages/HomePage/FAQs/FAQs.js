import React from "react";

const FAQs = () => {
  return (
    <div>
      <div className="text-center p-5">
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <h2>
          The most common questions about how our fisheries works and what
          services we provide.
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-5 p-5">
        <div>
          <div
            tabindex="0"
            class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title bg-gray-300 text-xl font-medium">
              What is fisheries management?
            </div>
            <div class="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur dolores nihil itaque, ab, vel pariatur deserunt
                placeat fuga culpa, commodi possimus. Dolores iste quia
                laboriosam doloremque adipisci ipsum esse assumenda.
              </p>
            </div>
          </div>
          <br />
          <div
            tabindex="0"
            class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title bg-gray-300 text-xl font-medium">
              Tell about your fisheries management.
            </div>
            <div class="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                ad natus cumque asperiores distinctio maxime et pariatur nobis?
                Voluptates fugit perferendis itaque quisquam recusandae omnis
                cumque sequi hic repellendus illum!
              </p>
            </div>
          </div>
          <br />
          <div
            tabindex="0"
            class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title bg-gray-300 text-xl font-medium">
              About your employiees.
            </div>
            <div class="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem maiores fuga temporibus. Esse provident, numquam
                repellendus mollitia libero aliquid! Magnam quos id quia
                exercitationem sapiente veniam perspiciatis ut assumenda quod!
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            tabindex="0"
            class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title bg-gray-300 text-xl font-medium">
              About your employiees.
            </div>
            <div class="collapse-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                voluptates, officiis tempore quae fugit accusantium at illum
                nesciunt atque ipsum fuga maxime saepe? Cupiditate aperiam
                nostrum perferendis maiores ipsum voluptatum!
              </p>
            </div>
          </div>
          <br />
          <div
            tabindex="0"
            class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title bg-gray-300 text-xl font-medium">
              How many sites I can create at once?
            </div>
            <div class="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                eos aperiam obcaecati non totam facilis illo, qui fugiat, saepe
                ex, id sed similique nisi amet iste tempora voluptatum dolores
                fugit!
              </p>
            </div>
          </div>
          <br />
          <div
            tabindex="0"
            class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title bg-gray-300 text-xl font-medium">
              How can I communicate with you?
            </div>
            <div class="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia placeat voluptas iusto culpa similique architecto fuga
                soluta! Totam saepe beatae aspernatur magnam, praesentium
                placeat dolores error ratione alias, blanditiis corrupti?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="w-full">
          <form class="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="pb-5">ADD A NEW REVIEW</h1>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                WHO GAVE THE REVIEW
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter the name"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                NEW REVIEW
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                REVIEW RATING
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full White border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>5</option>
                  <option>4</option>
                  <option>4.5</option>
                  <option>3</option>
                  <option>3.5</option>
                  <option>2</option>
                  <option>1</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </form>
          <div className="relative mr-5">
            <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded absolute top-0 right-0">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
