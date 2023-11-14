<template>
  <div id="cta" class="cta-section w-full md:py-20 mx-auto flex items-center mt-28 md:mt-40">
    <div class="lg:text-left md:px-60">
      <div
        class="w-full h-full flex items-center justify-center px-6 py-12 md:px-12"
      >
        <div class="grid gap-12 lg:grid-cols-2">
          <div class="mt-12 lg:mt-0 text-neutral-100">
            <h1 class="mb-12 text-5xl font-bold leading-tight tracking-tight">
              Interested? Make an enquiry.
            </h1>
            <p class="text-neutral-300 dark:text-neutral-200 mb-3">
              Check my CV if you want to see more about me! <a class="form-label tracking-wide text-gray-700 font-bold" href="[Resume] Tran Tuan Song.pdf" download="">Click Here</a>
            </p>
            <p>
              Telephone : <span class="form-label tracking-wide text-gray-70 font-bold"><a href="tel:+4733378901">+84 941527375</a></span>
            </p>
            <p>
              Email : <span class="form-label tracking-wide text-gray-700 font-bold"
                ><a href="mailto:trantuansong22@gmail.com">trantuansong22@gmail.com</a></span
              >
            </p>
            <p>
              Github: <span class="form-label tracking-wide text-gray-700 font-bold"
                ><a href="https://github.com/tuansong" target="_blank">https://github.com/tuansong</a></span
              >
            </p>
          </div>
          <div class="mb-12 lg:mb-0">
            <form class="w-full max-w-lg">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                  <label
                    class="form-label block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    Title*
                  </label>
                  <div class="relative">
                    <select
                      class="form-select block appearance-none w-full bg-transparent border-none leading-tight py-3 focus:outline-none"
                      id="grid-state"
                      v-model="formData.title"
                    >
                      <option>Mr.</option>
                      <option>Mrs.</option>
                      <option>Ms.</option>
                      <option>Dr.</option>
                      <option>Prof.</option>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    >
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="w-full md:w-2/5 px-3 mb-6 md:mb-0">
                  <label
                    class="form-label block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    First Name*
                  </label>
                  <input
                    v-model="formData.firstName"
                    @focus="onFocus('firstName')"
                    class="form-input appearance-none block w-full bg-transparent border-none py-3 mb-3 leading-tight focus:outline-none"
                    id="grid-first-name"
                    type="text"
                    placeholder="Enter your first name"
                  />
                  <p
                    v-if="initFocusState.firstName"
                    class="text-red-500 text-xs italic"
                  >
                    {{ validatefirstName }}
                  </p>
                </div>
                <div class="w-full md:w-2/5 px-3">
                  <label
                    class="form-label block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Last Name*
                  </label>
                  <input
                    v-model="formData.lastName"
                    @focus="onFocus('lastName')"
                    class="form-input appearance-none block w-full bg-transparent border-none py-3 mb-3 leading-tight focus:outline-none"
                    id="grid-last-name"
                    type="text"
                    placeholder="Enter your last name"
                  />
                  <p
                    v-if="initFocusState.lastName"
                    class="text-red-500 text-xs italic"
                  >
                    {{ validatelastName }}
                  </p>
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="form-label block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    Email*
                  </label>
                  <input
                    v-model="formData.email"
                    name="email"
                    @focus="onFocus('email')"
                    class="form-input appearance-none block w-full bg-transparent border-none py-3 mb-3 leading-tight focus:outline-none"
                    id="grid-city"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <p
                    v-if="initFocusState.email"
                    class="text-red-500 text-xs italic"
                  >
                    {{ validateEmail }}
                  </p>
                </div>
                <div class="w-full px-3 mb-6 md:mb-6">
                  <label
                    class="form-label block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    Enquiry*
                  </label>
                  <textarea
                    v-model="formData.inquiry"
                    @focus="onFocus('inquiry')"
                    class="form-input appearance-none block w-full bg-transparent border-none py-3 leading-tight focus:outline-none"
                    id="grid-city"
                    type="text"
                    placeholder="Compose enquiry here"
                  />
                  <p
                    v-if="initFocusState.validateEmail"
                    class="text-red-500 text-xs italic"
                  >
                    {{ validateInquiry }}
                  </p>
                </div>
              </div>
              <p class="form-info mb-3">
                This information that you have provided will only be used for
                this particular communication and will not be used for any other
                purpose.
              </p>
            </form>
            <button :disabled="notReadyToSubmit" @click="submitForm" class="form-button p-10 mb-4">
              Submit your Enquiry →
            </button>
            <p v-if="responseMessage" class="form-info mb-3">{{ message }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const initFocusState = ref({
  firstName: false,
  lastName: false,
  email: false,
  inquiry: false,
});

const formData = reactive({
  title: "Mr.",
  firstName: "",
  lastName: "",
  email: "",
  inquiry: "",
});

const responseMessage = ref("");

const validatefirstName = computed(() =>
  !formData.firstName ? "Please enter first name" : ""
);
const validatelastName = computed(() =>
  !formData.lastName ? "Please enter last name" : ""
);
const validateEmail = computed(() =>
  !formData.email || !validateEmailAddress(formData.email) ? "Please enter valid email" : ""
);
const validateInquiry = computed(() =>
  !formData.inquiry ? "Please enter inquiry" : ""
);
const notReadyToSubmit = computed(() => {
    return Object.values(formData).some(v => !v)
})
const message = computed(() => {
   return responseMessage.value == "OK"
    ? "Thank you for submit, we will contact you soon"
    : responseMessage
});

const onFocus = (type) => {
  initFocusState.value[type] = true;
};

const validateEmailAddress = (email) => {
  return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
}

const submitForm = (e) => {
  e.preventDefault();

  Email.send({
    SecureToken: "5ef8b875-e00d-4887-ab0d-fd2b7a8fe767",
    To: "cuccu771@gmail.com",
    From: "trantuansong22@gmail.com",
    Subject: `[New Client] - ${formData.title} ${formData.firstName}`,
    Body: `
    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <th>Title</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Inquiry</th>
        </tr>
        <tr>
            <td>${formData.title}</td>
            <td>${formData.firstName}</td>
            <td>${formData.lastName}</td>
            <td>${formData.email}</td>
            <td>${formData.inquiry}</td>
        </tr>
    </table>
    `,
  }).then((message) => (responseMessage.value = message));
};
</script>