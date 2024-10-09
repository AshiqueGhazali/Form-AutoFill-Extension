const fillForm = () => {
    console.log("this is fill form js");
    
    const multipleChoiceQuestions = document.querySelectorAll('div[data-params*="MULTIPLE_CHOICE"]');
    
    multipleChoiceQuestions.forEach(question => {
        const options = question.querySelectorAll('div[role="option"]');
        if (options.length) {
            const randomIndex = Math.floor(Math.random() * options.length);
            options[randomIndex].click(); // Randomly click an option
        }
    });

    const textInputs = document.querySelectorAll('input[type="text"], textarea');
    textInputs.forEach(input => {
        input.value = "Sample answer"; // Replace with desired text
    });
};

fillForm(); // Call fillForm when content.js runs
