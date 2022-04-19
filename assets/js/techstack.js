AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [

  {
    langImage: "assets/images/techstack-page/t.png",
    langName: "Tensorflow"
  },

    {
    langImage: "assets/images/techstack-page/keras.png",
    langName: "Keras",
  },
    {
    langImage: "assets/images/techstack-page/pandas.png",
    langName: "Pandas",
  },
    {
    langImage: "assets/images/techstack-page/sklearn.png",
    langName: "Scikit-Learn",
  },

    {
    langImage: "assets/images/techstack-page/seaborn.png",
    langName: "Seaborn",
  },
    {
    langImage: "assets/images/techstack-page/django.png",
    langName: "django",
  },
      {
    langImage: "assets/images/techstack-page/flask.png",
    langName: "Flask",
  },
      {
    langImage: "assets/images/techstack-page/fastapi.png",
    langName: "FAST API",
  },
    {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git and Bash",
  },


];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
