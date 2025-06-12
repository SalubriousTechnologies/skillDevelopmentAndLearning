# GitHub Label Usage Guideline

## Introduction

This document outlines the usage of labels in our GitHub repository to ensure consistent and efficient issue and task management.

## Label Categories

Labels are categorized into three main groups:

1. **Type**
2. **Priority**
3. **Status**

Each label should follow a naming pattern for clarity and ease of use.

## Type Labels

These labels categorize the nature of the issue or task.

- **Type: Bug** ![#d73a4a](https://via.placeholder.com/20/d73a4a?text=+): For issues that represent a bug in the system.
- **Type: Enhancement** ![#a2eeef](https://via.placeholder.com/20/a2eeef?text=+): For feature requests or improvements.
- **Type: Maintenance** ![#e4e669](https://via.placeholder.com/20/e4e669?text=+): For tasks related to maintenance or refactoring.
- **Type: Question** ![#d4c5f9](https://via.placeholder.com/20/d4c5f9?text=+): For general questions or clarifications.
- **Type: Documentation** ![#7057ff](https://via.placeholder.com/20/7057ff?text=+): For tasks related to writing or updating documentation.
- **Type: Testing** ![#f9a825](https://via.placeholder.com/20/f9a825?text=+): For tasks related to writing tests or performing testing.

## Priority Labels

These labels indicate the importance and urgency of the issue or task.

- **Priority: Critical** ![#b60205](https://via.placeholder.com/20/b60205?text=+): For issues that need immediate attention and resolution.
- **Priority: High** ![#e36209](https://via.placeholder.com/20/e36209?text=+): For high-importance tasks that should be prioritized after critical issues.
- **Priority: Medium** ![#fbca04](https://via.placeholder.com/20/fbca04?text=+): For tasks that are important but not urgent.
- **Priority: Low** ![#0e8a16](https://via.placeholder.com/20/0e8a16?text=+): For tasks that can be addressed at a later time.
- **Priority: Urgent** ![#d93f0b](https://via.placeholder.com/20/d93f0b?text=+): For the highest priority tasks that are extremely time-sensitive.

## Status Labels

These labels indicate the current status of the issue or task.

- **Status: Abandoned** ![#000000](https://via.placeholder.com/20/000000?text=+): For issues or tasks that are no longer being pursued.
- **Status: Accepted** ![#008672](https://via.placeholder.com/20/008672?text=+): For issues or tasks that have been reviewed and accepted.
- **Status: Available** ![#b2b7f8](https://via.placeholder.com/20/b2b7f8?text=+): For tasks that are available to be picked up.
- **Status: Blocked** ![#e11d21](https://via.placeholder.com/20/e11d21?text=+): For issues or tasks that are blocked and cannot proceed.
- **Status: Completed** ![#1f83d6](https://via.placeholder.com/20/1f83d6?text=+): For tasks that have been completed.
- **Status: In Progress** ![#c2e0c6](https://via.placeholder.com/20/c2e0c6?text=+): For tasks that are currently being worked on.
- **Status: On Hold** ![#e99695](https://via.placeholder.com/20/e99695?text=+): For tasks that are temporarily paused.
- **Status: Pending** ![#fbca04](https://via.placeholder.com/20/fbca04?text=+): For tasks that are waiting for something before they can proceed.
- **Status: Review Needed** ![#f9d76e](https://via.placeholder.com/20/f9d76e?text=+): For tasks that need to be reviewed.
- **Status: Revision Needed** ![#d93f0b](https://via.placeholder.com/20/d93f0b?text=+): For tasks that require revisions.
- **Status: Needs Triage** ![#d4e8fc](https://via.placeholder.com/20/d4e8fc?text=+): For new issues that need to be reviewed and categorized.
- **Status: Duplicate** ![#cccccc](https://via.placeholder.com/20/cccccc?text=+): For issues that are duplicates of existing ones.
- **Status: Won't Fix** ![#e4e4e4](https://via.placeholder.com/20/e4e4e4?text=+): For issues that will not be addressed.

## Guidelines for Using Labels

1. **Adding Labels**:

   - Only add labels that accurately describe the issue or task.
   - Use as many labels as necessary to fully categorize the issue.
   - Ensure the labels are consistent with the predefined categories.

2. **Updating Labels**:

   - Regularly review and update labels as the status or priority of the issue changes.
   - Remove any labels that no longer apply.

3. **Label Combinations**:

   - An issue should always have at least one `Type` label.
   - An issue can have only one `Priority` label.
   - An issue can have multiple `Status` labels, but ensure they are relevant.

4. **Regular Review**:
   - Periodically review the labels to ensure they remain relevant and useful.
   - Remove labels that are no longer needed and add new ones as necessary.

## Example

Here’s an example of a well-labeled issue and PR:

- **Type: Bug**
- **Priority: High**
- **Status: In Progress**
- **Status: Review Needed**

## Script for creation of labels

If gh cli tool is installed, you can use the following script to create the labels:

```bash
REPO_NAME="SalubriousTechnologies/medicine_server"
# Type Labels
gh label create "Type: Bug" --color "d73a4a" --description "For issues that represent a bug in the system." --repo $REPO_NAME
gh label create "Type: Enhancement" --color "a2eeef" --description "For feature requests or improvements." --repo $REPO_NAME
gh label create "Type: Maintenance" --color "e4e669" --description "For tasks related to maintenance or refactoring." --repo $REPO_NAME
gh label create "Type: Question" --color "d4c5f9" --description "For general questions or clarifications." --repo $REPO_NAME
gh label create "Type: Documentation" --color "7057ff" --description "For tasks related to writing or updating documentation." --repo $REPO_NAME
gh label create "Type: Testing" --color "f9a825" --description "For tasks related to writing tests or performing testing." --repo $REPO_NAME
gh label create "Priority: Critical" --color "b60205" --description "For issues that need immediate attention and resolution." --repo $REPO_NAME
gh label create "Priority: High" --color "e36209" --description "For high-importance tasks that should be prioritized after critical issues." --repo $REPO_NAME
gh label create "Priority: Medium" --color "fbca04" --description "For tasks that are important but not urgent." --repo $REPO_NAME
gh label create "Priority: Low" --color "0e8a16" --description "For tasks that can be addressed at a later time." --repo $REPO_NAME
gh label create "Priority: Urgent" --color "d93f0b" --description "For the highest priority tasks that are extremely time-sensitive." --repo $REPO_NAME
gh label create "Status: Abandoned" --color "000000" --description "For issues or tasks that are no longer being pursued." --repo $REPO_NAME
gh label create "Status: Accepted" --color "008672" --description "For issues or tasks that have been reviewed and accepted." --repo $REPO_NAME
gh label create "Status: Available" --color "b2b7f8" --description "For tasks that are available to be picked up." --repo $REPO_NAME
gh label create "Status: Blocked" --color "e11d21" --description "For issues or tasks that are blocked and cannot proceed." --repo $REPO_NAME
gh label create "Status: Completed" --color "1f83d6" --description "For tasks that have been completed." --repo $REPO_NAME
gh label create "Status: In Progress" --color "c2e0c6" --description "For tasks that are currently being worked on." --repo $REPO_NAME
gh label create "Status: On Hold" --color "e99695" --description "For tasks that are temporarily paused." --repo $REPO_NAME
gh label create "Status: Pending" --color "fbca04" --description "For tasks that are waiting for something before they can proceed." --repo $REPO_NAME
gh label create "Status: Review Needed" --color "f9d76e" --description "For tasks that need to be reviewed." --repo $REPO_NAME
gh label create "Status: Revision Needed" --color "d93f0b" --description "For tasks that require revisions." --repo $REPO_NAME
gh label create "Status: Needs Triage" --color "d4e8fc" --description "For new issues that need to be reviewed and categorized." --repo $REPO_NAME
gh label create "Status: Duplicate" --color "cccccc" --description "For issues that are duplicates of existing ones." --repo $REPO_NAME
gh label create "Status: Won't Fix" --color "e4e4e4" --description "For issues that will not be addressed." --repo $REPO_NAME
```
