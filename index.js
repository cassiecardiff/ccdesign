var data = {
  projectGroups: [
    {
      groupName: "User Experience",
      projects: [
        {
          url: "young-enterprise-marketplace",
          thumbnail: "ye-project.png",
          altThumbnail: "Young Enterprise",
          legend: "Young Enterprise Marketplace Re-design"
        },
        {
            url: "flight-booking",
            thumbnail: "airplane.svg",
            altThumbnail: "Airplane",
            legend: "User-centered Flight Booking Design"
          }
      ]
    },
    {
      groupName: "Research",
      projects: [
        {
          url: "young-enterprise-marketplace",
          thumbnail: "ye-project.png",
          altThumbnail: "Young Enterprise",
          legend: "Young Enterprise Marketplace Re-design"
        }
      ]
    },
    {
        groupName: "Design",
        projects: [
          {
            url: "young-enterprise-marketplace",
            thumbnail: "ye-project.png",
            altThumbnail: "Young Enterprise",
            legend: "Young Enterprise Marketplace Re-design"
          }
        ]
      }
  ]
};

var project_template = `
{{#projectGroups}}
<div class="project-group">
    <h2>{{groupName}}</h2>
    <div class="grid-container">
        {{#projects}}
        <div class="project">
            <a href="/projects/{{url}}">
                <img src=/{{thumbnail}} alt={{altThumbnail}}></img>
            </a>
            <p>{{legend}}</p>
        </div>
        {{/projects}}
    </div>
</div>
{{/projectGroups}}
`;

var html = Mustache.to_html(project_template, data);
console.log(html);
$("#temp")[0].outerHTML = html;
