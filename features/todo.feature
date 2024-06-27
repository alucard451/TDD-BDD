Feature: To-Do List Management

  Scenario: Add a new task
    Given a new to-do list
    When I add a task named "Learn TDD"
    Then the task list should contain a task named "Learn TDD"

  Scenario: Delete a task
    Given a to-do list with a task named "Learn TDD"
    When I delete the task with ID 1
    Then the task list should be empty

  Scenario: Mark a task as completed
    Given a to-do list with a task named "Learn TDD"
    When I complete the task with ID 1
    Then the task with ID 1 should be marked as completed
