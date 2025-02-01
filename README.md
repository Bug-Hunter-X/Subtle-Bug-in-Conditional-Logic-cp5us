# Subtle Bug in Conditional Logic

This repository demonstrates a common yet easily missed bug in JavaScript conditional statements.  The bug involves incorrect handling of multiple conditions, leading to unexpected results.

## The Bug
The provided `foo` function is intended to return the product of two numbers, but it returns 0 if either of the inputs is 0.  The correct logic should only return 0 if *both* inputs are 0.  This subtle error could lead to incorrect calculations in various scenarios.

## The Solution
The corrected `foo` function correctly handles the condition where only both inputs are 0, ensuring the intended behavior of returning 0 only in that specific case.