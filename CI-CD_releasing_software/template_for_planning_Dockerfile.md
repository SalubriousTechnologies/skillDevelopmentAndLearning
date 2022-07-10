# Template for creating a dockerfile and CI for an existing project

This is a template of questions that need to be answered/discussed in order
for a Dockerfile to be created effectively for an existing repository by a team.

- What are the environments (node, ruby, php, etc) needed for

  - Build/Compile time (if applicable)
  - Run time

- Is there a preferred package-manager (npm,yarn,cargo, etc.)

- Any special routing requirements, eg. using react router and hence always
  returning index file vs. server rendering and returning static files from the
  server itself rather than application etc.

- What are the environment variables needed during

  - Build/Compile time (if applicable)
  - Run time

- What special permissions are required by the process/application?

  - Read, write, execute permissions on the file-system

- What is the way to conduct a healthcheck, i.e. how do we know that the
  application is running?

- Versioning of the application, is there any, how is it done?

- Target environments and special requirements for each (staging, qa, production)

- Linting rules and linter being used

- notifications required for?, eg. specific failures

- error logging tools
