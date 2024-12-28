# Worship Scheduling Tool
The goal of this project is to make collecting availability from the worship team easier while enabling the worship director/leader a organized view of the team's schedule.

## The Problem
In the past, the worship director had to tediously ask each person their availability. We attempted to use a Google Sheet to collect the team's availability, but Sheet was not easy to use on mobile or was too complex to some users.

### Why do we need code?
We settled on using a Google Form to collect availibility from the team. However, to keep the form simple and clean for the user to use, we had to compromise on the data outputted by the Google Form. Code was written to efficiently parse the data output from the Google Form and output it onto a Google Sheet. The code was written in such a way that it will be easy to rename things in the Google Form and still have functional code.
