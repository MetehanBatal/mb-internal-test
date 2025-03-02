document.addEventListener('DOMContentLoaded', function() {
    
    // mixpanel.track("PageView-Test", {
    //     "advertorialPageName": "mb-sheets-a-quiz",
    //     "url": window.location.origin + window.location.pathname
    // });

    // mixpanel.track("PageView", {
    //     "advertorialPageName": "mb-sheets-a-quiz",
    //     "url": window.location.origin + window.location.pathname
    // });

    function callPageView() {
        console.log('Track called: ', mixpanel);

        let traits = {
            "advertorialPageName": "mb-sheets-a-quiz",
            "url": window.location.origin + window.location.pathname
        };

        console.log('Tracked from: ', traits);
        mixpanel.track("eventTesting", traits);

        mixpanel.track("PageView", traits);
    }
    
    callPageView();

    document.querySelectorAll('.questions-wrapper').forEach(wrapper => {
        const type = wrapper.getAttribute('data-type');
        wrapper.querySelectorAll('.question-item').forEach(item => {
            item.addEventListener('click', () => {
                const ctaButton = wrapper.querySelector('.quiz-cta');
                if (type === 'single') {
                    wrapper.querySelectorAll('.question-item').forEach(i => i.classList.remove('activated'));
                    item.classList.add('activated');
                    if (wrapper.querySelector('.question-item.activated')) {
                        ctaButton.classList.remove('yellow-bg');
                    } else {
                        ctaButton.classList.add('yellow-bg');
                    }
                } else if (type === 'multiple') {
                    item.classList.toggle('activated');
                    if (wrapper.querySelector('.question-item.activated')) {
                        ctaButton.classList.remove('yellow-bg');
                    } else {
                        ctaButton.classList.add('yellow-bg');
                    }
                }
            });
        });
    });

    const continueButtons = document.querySelectorAll(".quiz-cta");
    const backButtons = document.querySelectorAll(".cta-arrow");
    let currentStep = 1;
    const totalSteps = document.querySelectorAll(".quiz-container").length;

    function updateStep() {
        console.log('Update step ran: ',currentStep, document.querySelector(`.quiz-container[quizStep="${currentStep}"]`));
        if (currentStep === 7) {
            document.querySelector(".delivered-text").style.display = "none";
        }
        document.querySelectorAll(".quiz-container").forEach(container => {
            container.style.display = "none";
        });
        document.querySelector(`.quiz-container[quizStep="${currentStep}"]`).style.display = "block";
        document.querySelector(".navigation-path-fill").style.width = `${(currentStep / totalSteps) * 100}%`;

        if (currentStep === 7) {
            const video = document.querySelector(".quiz-container[quizStep='7'] video");
            if (video) {
                video.play();
                setTimeout(() => {
                    currentStep = 8;
                    updateStep();
                    startTimer();
                }, 4000);
            }
        }
    }

    function startTimer() {
        const timerElement = document.querySelector('.timer');
        let time = 15 * 60;
        const interval = setInterval(() => {
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            time--;
            if (time < 0) {
                clearInterval(interval);
                timerElement.textContent = "00:00";

            }
        }, 1000);
    }

    updateStep();

    continueButtons.forEach(button => {
        button.addEventListener("click", () => {
            console.log('Clicked button: ', totalSteps, currentStep)
            if (currentStep < totalSteps) {
                let quizStep = {
                    "advertorialPageName": "mb-sheets-a-quiz",
                    "url": window.location.origin + window.location.pathname,
                    "quizStep": currentStep,
                };
                console.log(quizStep, mixpanel);
                mixpanel.track("Question Answered", quizStep);
                currentStep++;
                updateStep();
            }
        });
    });

    backButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (currentStep > 1) {
                currentStep--;
                updateStep();
            }
        });
    });
    
    document.querySelector('.submit-button').addEventListener('click', () => {        
        const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf6f1BZItUyQD8kyO4Ll5x0MSkVebdQbvchy0-n6dlCLrUuQQ/formResponse';
        const formData = new URLSearchParams();    
        document.querySelectorAll('[quizStep="1"] .question-item.activated').forEach((item, index) => {
            formData.append(`entry.256844640`, item.textContent.trim());
        });           
        formData.append('entry.1690818748', document.querySelector('[quizStep="2"] .question-item.activated').textContent.trim());
        formData.append('entry.999775275', document.querySelector('[quizStep="3"] .question-item.activated').textContent.trim());
        formData.append('entry.1308456544', document.querySelector('[quizStep="4"] .question-item.activated').textContent.trim());
        formData.append('entry.1539697811', document.querySelector('[quizStep="5"] .question-item.activated').textContent.trim());
        formData.append('entry.1140663272', document.querySelector('[quizStep="6"] .question-item.activated').textContent.trim());    
        fetch(formUrl, {
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: 'POST',
            body: formData
        }).then(() => {
            console.log('Survey Sent');
        }).catch((error) => {
            console.error('Error:', error);
        });
    });
});
