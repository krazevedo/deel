# Take Home Test Challenge for QA Engineers

Sample project to Deel QA Engineer Technical Assessment with [Deel](https://growth.deel.training/dev/salary-insights).

### Why Cypress

I chose Cypress to automate API testing and end-to-end (E2E) testing because it offers several compelling benefits, making it a popular choice among QA engineers. Here are some benefits.

1. Easy Setup and Integration

   Setting up Cypress is straightforward, requiring minimal configuration to get started. Its integration with modern JavaScript frameworks and tools (like React, Angular, Vue, and Jest) makes it easy to incorporate into existing projects, streamlining the testing process.

2. Cross-Browser Testing

   Cypress supports cross-browser testing out of the box, allowing you to run your E2E tests across Chrome, Firefox, Safari, and Edge. This broad compatibility ensures that your application works seamlessly across different browsers and platforms.

3. Rich Debugging Capabilities

   Cypress provides extensive debugging capabilities, including network traffic inspection, screenshots on failure, and video recording of test runs. These features make it easier to diagnose and fix issues quickly.

4. API Testing Support

   While primarily known for E2E testing, Cypress also offers robust support for API testing. Developers can write tests to validate RESTful services, GraphQL APIs, and more, all within the same framework.

5. Developer-Friendly

   Cypress is designed with developers in mind, offering a familiar syntax and a rich set of developer tools. This focus on developer experience encourages more developers to participate in testing activities, fostering a culture of quality.

6. Parallel Test Execution

   Cypress supports parallel test execution, enabling teams to run a large number of tests in less time. This capability is particularly useful for maintaining fast CI/CD pipelines.

**Conclusion**
Cypress's combination of powerful features, ease of use, and strong community support makes it an excellent choice for automating both API and E2E tests.

### Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I used versions `v20.13.1` and `10.5.2` of Node.js and npm, respectively. I suggest you use the same or later versions.

### Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

Run `npm run cy:test` to run the test in headless mode.

Or, run `npm run cy:open` to open Cypress in interactive mode.

## Interpret the results

Cypress provides detailed test results and generate a report to better understand about:.

- Visibility: They provide a clear overview of test results, allowing stakeholders to quickly assess the application's functionality.
- Debugging: They help identify and debug issues by detailing failing tests, error messages, stack traces, and screenshots.
- Metrics and Trends: They include metrics like test pass rates, execution times, and historical trends, helping teams track progress and spot patterns.
- Documentation: They document test cases and outcomes, aiding in understanding the purpose and expected behavior of tests.
- Decision Making: They offer insights for decision-making, such as prioritizing bug fixes, optimizing test coverage, and allocating resources effectively.

![Report Image](cypress/assets/deel_cypress_report.png)

---

This project was created by [Kaio Azevedo].
