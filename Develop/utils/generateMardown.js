// function to generate markdown for README
function generateMarkdown(data, githubData) {
  return `
# **${data.title}**

${data.badgeLink}

##Description

${data.projectDescription}

##Table of Contents

-[Project Description]
-[Install]
-[Usage]
-[Licensing]
-[Contributors]
-[Test]
-[Repo Link]
-[GitHub Information]

##Installation

${data.install}

##Usage

${data.usage}

##Licensing

${data.licensing}

##Contributors

${data.contributors}

##Test

${data.test}

##Repo
-[Project Repo](${data.repoLink})

##Github User
-${githubData.githubName}
-${githubData.githubProfile}
-<${githubData.githubEmail}>
`;
}

module.exports = generateMarkdown;