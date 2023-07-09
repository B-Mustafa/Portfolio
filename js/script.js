/* Typing animation*/
var typed = new Typed(".design",{
    strings:["","Web Designer","Web Developer","Graphic Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/*===========================================================================================*/

const nav = document.querySelector(".nav"),
    navList =  nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSelection = document.querySelectorAll(".section"),
    totalSelection = allSelection.length;
    for(let i=0;i<totalNavList;i++)
    {
        const a= navList[i].querySelector("a")
        a.addEventListener("click",function()
        {
            for(let i=0;i<totalSelection;i++)
        {
            allSelection[i].classList.remove("back-section");        
        }
            for(let j=0;j<totalNavList;j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    allSelection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active")
            }
            this.classList.add("active")
            showSelection(this)
            if(window.innerWidth < 1200)
            {
                sidebarSectionToggle();
            }
        })
    }
    function showSelection(element)
    {
        for(let i=0;i<totalSelection;i++)
        {
            allSelection[i].classList.remove("active");        
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element)
    {
        for(let i=0;i<totalNavList;i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[4];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[4])
            {
                navList[4].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire").addEventListener("click",function()
    {
        const sectionindex = this.getAttribute("data-section-box");
        showSelection(this);
        updateNav(this);
    })

const sidebarToggle = document.querySelector(".sidebar-toggle")
    sidebar = document.querySelector(".sidebar");
    sidebarToggle.addEventListener("click",()=>{
        sidebarSectionToggle();
    }) 
    function sidebarSectionToggle(){
        sidebar.classList.toggle("open");
        sidebarToggle.classList.toggle("open");
        for(let i=0;i<totalSelection;i++)
        {
            allSelection[i].classList.toggle("open");
        }
    }

    /* contact form  */

    function sendMail(){
        var params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        }; 

        const serviceID = "service_ufv76sb";
        const templateID = "template_5wnsica";

        emailjs.send(serviceID, templateID, params)
        .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value= "";
        document.getElementById("subject").value ="";
        document.getElementById("message").value ="";
        console.log(res);
        alert("your message sent successfully");
        })
        .catch((err) => console.log(err));
        }

/* portfolio fetch */

 async function fetchRepositories() {
            try {
                const response = await fetch('https://api.github.com/users/B-Mustafa/repos');
                const repositories = await response.json();

                displayRepositories(repositories);
            } catch (error) {
                console.log('Error fetching repositories:', error);
            }
        }

        // Function to display repositories using cards on the web page
        function displayRepositories(repositories) {
            const repositoriesDiv = document.getElementById('repositories');

            repositories.forEach(repo => {
                const card = document.createElement('div');
                card.className = 'card';

                const name = document.createElement('h3');
                name.textContent = repo.name;

                const description = document.createElement('p');
                description.textContent = repo.description || 'No description provided.';

                const language = document.createElement('p');
                language.textContent = `Language: ${repo.language || 'Not specified.'}`;

                const link = document.createElement('a');
                link.href = repo.html_url;
                link.textContent = 'Go to repository';

                card.appendChild(name);
                card.appendChild(description);
                card.appendChild(language);
                card.appendChild(link);
                repositoriesDiv.appendChild(card);
            });
        }

        // Fetch repositories on page load
        fetchRepositories();
