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