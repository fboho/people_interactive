//GLOBAL VARIABLES
//TODO: SHIFT THE BIGGER DICTS TO FILE

let data = {"Alaska":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":2,"Contribution Limits per 4 Years":4,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":2.8,"Ratio 18-24 Turnout to 25+ Turnout, 2018":3.5,"Ratio Minority to Nonminority Turnout, 2018":1,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":0.2,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":3,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":0.2},"Alabama":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":0.2,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":1.8,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2,"Ratio Minority to Nonminority Turnout, 2018":2.9,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":0.2,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":0.2,"Good Audit Sample, to Check Computer Tallies?":0.2,"Audit All Contests? Number of Contests Checked":0.2,"Public Can Recount with Copies of Ballots":3},"Arkansas":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":1,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":0.4,"Ratio 18-24 Turnout to 25+ Turnout, 2018":1.8,"Ratio Minority to Nonminority Turnout, 2018":2.7,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":3,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":0.2,"VBM Review: Rejection Rate, 2018":5,"Do Votes Have a Paper Trail? 2022":4,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":2,"Audit All Contests? Number of Contests Checked":1,"Public Can Recount with Copies of Ballots":2},"Arizona":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,"Contribution Limits per 4 Years":1,"Public Campaign $ for Gov+Legislature":5,"Turnout, % of Voting-age Citizens, 2020":2.3,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2,"Ratio Minority to Nonminority Turnout, 2018":1.5,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":3,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":3,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":3,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":3.5,"Public Can Recount with Copies of Ballots":0.2},"California":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,"Contribution Limits per 4 Years":1,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":2.8,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2.9,"Ratio Minority to Nonminority Turnout, 2018":1.4,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":4,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":5,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":3,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":2},"Colorado":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,"Contribution Limits per 4 Years":4.7,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":4.3,"Ratio 18-24 Turnout to 25+ Turnout, 2018":3.2,"Ratio Minority to Nonminority Turnout, 2018":1.2,"Weekend Early Voting, State Minimum":2,"Access to Vote by Mail":4,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":3,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":5,"Audit All Contests? Number of Contests Checked":1,"Public Can Recount with Copies of Ballots":5},"Connecticut":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":4.6,"Public Campaign $ for Gov+Legislature":5,"Turnout, % of Voting-age Citizens, 2020":3.4,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2.7,"Ratio Minority to Nonminority Turnout, 2018":1.7,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":0.2,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":1,"Good Audit Sample, to Check Computer Tallies?":2,"Audit All Contests? Number of Contests Checked":1.5,"Public Can Recount with Copies of Ballots":1},"Dist.of Columbia":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":0.2,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":1.9,"Ratio 18-24 Turnout to 25+ Turnout, 2018":5,"Ratio Minority to Nonminority Turnout, 2018":2,"Weekend Early Voting, State Minimum":1,"Access to Vote by Mail":4,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":5,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":3,"Public Can Recount with Copies of Ballots":3},"Delaware":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":4.6,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":3.2,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2.2,"Ratio Minority to Nonminority Turnout, 2018":3.5,"Weekend Early Voting, State Minimum":5,"Access to Vote by Mail":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":0.2,"Do Votes Have a Paper Trail? 2022":4,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":2},"Florida":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":3.5,"Public Campaign $ for Gov+Legislature":3,"Turnout, % of Voting-age Citizens, 2020":3.4,"Ratio 18-24 Turnout to 25+ Turnout, 2018":1.8,"Ratio Minority to Nonminority Turnout, 2018":2.1,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":3,"Number of Days when Voters Can Cure Signature Problems, after Election Day":2,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":5,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":1.5,"Public Can Recount with Copies of Ballots":5},"Georgia":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":1,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":2.6,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2.7,"Ratio Minority to Nonminority Turnout, 2018":3.8,"Weekend Early Voting, State Minimum":2,"Access to Vote by Mail":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":2.6,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":0.2,"Do Votes Have a Paper Trail? 2022":4,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":5,"Audit All Contests? Number of Contests Checked":0.5,"Public Can Recount with Copies of Ballots":5},"Hawaii":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,"Contribution Limits per 4 Years":1,"Public Campaign $ for Gov+Legislature":5,"Turnout, % of Voting-age Citizens, 2020":0.7,"Ratio 18-24 Turnout to 25+ Turnout, 2018":1.6,"Ratio Minority to Nonminority Turnout, 2018":2.5,"Weekend Early Voting, State Minimum":2,"Access to Vote by Mail":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":3,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":1,"Public Can Recount with Copies of Ballots":3},"Iowa":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,"Contribution Limits per 4 Years":0.2,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":3.7,"Ratio 18-24 Turnout to 25+ Turnout, 2018":1.9,"Ratio Minority to Nonminority Turnout, 2018":2.4,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":0.2,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":0.5,"Public Can Recount with Copies of Ballots":3},"Idaho":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,"Contribution Limits per 4 Years":3.5,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":2.7,"Ratio 18-24 Turnout to 25+ Turnout, 2018":0.6,"Ratio Minority to Nonminority Turnout, 2018":0.4,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":3,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":0.2,"VBM Review: Rejection Rate, 2018":5,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":0.2,"Good Audit Sample, to Check Computer Tallies?":0.2,"Audit All Contests? Number of Contests Checked":0.2,"Public Can Recount with Copies of Ballots":4},"Illinois":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":1,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":2.5,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2,"Ratio Minority to Nonminority Turnout, 2018":1.9,"Weekend Early Voting, State Minimum":3,"Access to Vote by Mail":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":5,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":3,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":2},"Indiana":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":0.2,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":1.4,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2.4,"Ratio Minority to Nonminority Turnout, 2018":2.4,"Weekend Early Voting, State Minimum":2,"Access to Vote by Mail":0.2,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":0.2,"VBM Review: Rejection Rate, 2018":3,"Do Votes Have a Paper Trail? 2022":2,"Hand Tally Audits, to Check Computer Tallies?":0.2,"Good Audit Sample, to Check Computer Tallies?":0.2,"Audit All Contests? Number of Contests Checked":0.2,"Public Can Recount with Copies of Ballots":2},"Kansas":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":4,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":2.3,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2.7,"Ratio Minority to Nonminority Turnout, 2018":2.1,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":3,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":5,"Do Votes Have a Paper Trail? 2022":4,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":1.5,"Public Can Recount with Copies of Ballots":4},"Kentucky":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":2,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":2.1,"Ratio 18-24 Turnout to 25+ Turnout, 2018":0.7,"Ratio Minority to Nonminority Turnout, 2018":3.4,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":3,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":0.2,"VBM Review: Rejection Rate, 2018":5,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":1,"Public Can Recount with Copies of Ballots":2},"Louisiana":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":1.3,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":2,"Ratio 18-24 Turnout to 25+ Turnout, 2018":1.2,"Ratio Minority to Nonminority Turnout, 2018":3.1,"Weekend Early Voting, State Minimum":1,"Access to Vote by Mail":0.2,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":5,"Do Votes Have a Paper Trail? 2022":0.2,"Hand Tally Audits, to Check Computer Tallies?":0.2,"Good Audit Sample, to Check Computer Tallies?":0.2,"Audit All Contests? Number of Contests Checked":0.2,"Public Can Recount with Copies of Ballots":1},"Massachusetts":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":3,"Public Campaign $ for Gov+Legislature":3,"Turnout, % of Voting-age Citizens, 2020":3.5,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2.2,"Ratio Minority to Nonminority Turnout, 2018":1.7,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":5,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":4,"Public Can Recount with Copies of Ballots":1},"Maryland":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":2,"Public Campaign $ for Gov+Legislature":3,"Turnout, % of Voting-age Citizens, 2020":3.3,"Ratio 18-24 Turnout to 25+ Turnout, 2018":3,"Ratio Minority to Nonminority Turnout, 2018":2.5,"Weekend Early Voting, State Minimum":3,"Access to Vote by Mail":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":0.2,"VBM Review: Rejection Rate, 2018":0.2,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":2,"Audit All Contests? Number of Contests Checked":1,"Public Can Recount with Copies of Ballots":5},"Maine":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":4.8,"Public Campaign $ for Gov+Legislature":5,"Turnout, % of Voting-age Citizens, 2020":4.3,"Ratio 18-24 Turnout to 25+ Turnout, 2018":0.7,"Ratio Minority to Nonminority Turnout, 2018":0.8,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":3,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":5,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":0.2,"Good Audit Sample, to Check Computer Tallies?":0.2,"Audit All Contests? Number of Contests Checked":0.2,"Public Can Recount with Copies of Ballots":0.2},"Michigan":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,"Contribution Limits per 4 Years":4,"Public Campaign $ for Gov+Legislature":3,"Turnout, % of Voting-age Citizens, 2020":3.8,"Ratio 18-24 Turnout to 25+ Turnout, 2018":1.9,"Ratio Minority to Nonminority Turnout, 2018":2.8,"Weekend Early Voting, State Minimum":2,"Access to Vote by Mail":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":3,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":2,"Audit All Contests? Number of Contests Checked":0.5,"Public Can Recount with Copies of Ballots":4},"Minnesota":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":4,"Public Campaign $ for Gov+Legislature":5,"Turnout, % of Voting-age Citizens, 2020":5,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2.9,"Ratio Minority to Nonminority Turnout, 2018":2.1,"Weekend Early Voting, State Minimum":1,"Access to Vote by Mail":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":0.2,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":3,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":1.5,"Public Can Recount with Copies of Ballots":2},"Missouri":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":4,"Contribution Limits per 4 Years":1.8,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":2.3,"Ratio 18-24 Turnout to 25+ Turnout, 2018":3.7,"Ratio Minority to Nonminority Turnout, 2018":2.2,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":0.2,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":2.5,"Public Can Recount with Copies of Ballots":3},"Mississippi":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":0.2,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":1.2,"Ratio 18-24 Turnout to 25+ Turnout, 2018":1.1,"Ratio Minority to Nonminority Turnout, 2018":5,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":3,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":0.2,"VBM Review: Rejection Rate, 2018":3,"Do Votes Have a Paper Trail? 2022":1.4,"Hand Tally Audits, to Check Computer Tallies?":0.2,"Good Audit Sample, to Check Computer Tallies?":0.2,"Audit All Contests? Number of Contests Checked":0.2,"Public Can Recount with Copies of Ballots":4},"Montana":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,"Contribution Limits per 4 Years":4.7,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":3.7,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2.3,"Ratio Minority to Nonminority Turnout, 2018":1.7,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":3,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":3,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":3,"Public Can Recount with Copies of Ballots":4},"North Carolina":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":1,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":3.4,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2.1,"Ratio Minority to Nonminority Turnout, 2018":2.9,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"Good VBM List, Tracks Address Changes & Deaths":0.2,"VBM Review: Rejection Rate, 2018":0.2,"Do Votes Have a Paper Trail? 2022":4,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":5,"Audit All Contests? Number of Contests Checked":0.5,"Public Can Recount with Copies of Ballots":0.2},"North Dakota":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":0.2,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":2,"Ratio 18-24 Turnout to 25+ Turnout, 2018":1.9,"Ratio Minority to Nonminority Turnout, 2018":0.9,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":3,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":0.2,"VBM Review: Rejection Rate, 2018":3,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":0.2,"Good Audit Sample, to Check Computer Tallies?":0.2,"Audit All Contests? Number of Contests Checked":0.2,"Public Can Recount with Copies of Ballots":2},"Nebraska":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":0.2,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":3.1,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2.4,"Ratio Minority to Nonminority Turnout, 2018":0.2,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":0.2,"VBM Review: Rejection Rate, 2018":3,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":0.2,"Good Audit Sample, to Check Computer Tallies?":0.2,"Audit All Contests? Number of Contests Checked":0.2,"Public Can Recount with Copies of Ballots":2},"New Hampshire":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":1,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":4.1,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2.8,"Ratio Minority to Nonminority Turnout, 2018":2.1,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":0.2,"VBM Review: Rejection Rate, 2018":0.2,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":0.2,"Good Audit Sample, to Check Computer Tallies?":0.2,"Audit All Contests? Number of Contests Checked":0.2,"Public Can Recount with Copies of Ballots":0.2},"New Jersey":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,"Contribution Limits per 4 Years":1.1,"Public Campaign $ for Gov+Legislature":3,"Turnout, % of Voting-age Citizens, 2020":4.1,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2.1,"Ratio Minority to Nonminority Turnout, 2018":2.3,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":4,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":5,"Do Votes Have a Paper Trail? 2022":1,"Hand Tally Audits, to Check Computer Tallies?":0.2,"Good Audit Sample, to Check Computer Tallies?":0.2,"Audit All Contests? Number of Contests Checked":0.2,"Public Can Recount with Copies of Ballots":3},"New Mexico":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":1,"Public Campaign $ for Gov+Legislature":2,"Turnout, % of Voting-age Citizens, 2020":1.4,"Ratio 18-24 Turnout to 25+ Turnout, 2018":1.9,"Ratio Minority to Nonminority Turnout, 2018":0.6,"Weekend Early Voting, State Minimum":2,"Access to Vote by Mail":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":0.2,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":5,"Audit All Contests? Number of Contests Checked":2,"Public Can Recount with Copies of Ballots":2},"Nevada":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":1,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":2.2,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2.8,"Ratio Minority to Nonminority Turnout, 2018":0.9,"Weekend Early Voting, State Minimum":3,"Access to Vote by Mail":4,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":5,"Do Votes Have a Paper Trail? 2022":4,"Hand Tally Audits, to Check Computer Tallies?":1,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":2},"New York":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":1,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":1.8,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2.9,"Ratio Minority to Nonminority Turnout, 2018":2.4,"Weekend Early Voting, State Minimum":5,"Access to Vote by Mail":3,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":0.2,"VBM Review: Rejection Rate, 2018":5,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":0.2},"Ohio":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":1,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":2.6,"Ratio 18-24 Turnout to 25+ Turnout, 2018":0.5,"Ratio Minority to Nonminority Turnout, 2018":2.6,"Weekend Early Voting, State Minimum":5,"Access to Vote by Mail":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":5,"Do Votes Have a Paper Trail? 2022":4,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":2.5,"Public Can Recount with Copies of Ballots":5},"Oklahoma":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":3.7,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":0.2,"Ratio 18-24 Turnout to 25+ Turnout, 2018":0.8,"Ratio Minority to Nonminority Turnout, 2018":1.8,"Weekend Early Voting, State Minimum":1,"Access to Vote by Mail":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":0.2,"VBM Review: Rejection Rate, 2018":0.2,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":0.2,"Good Audit Sample, to Check Computer Tallies?":0.2,"Audit All Contests? Number of Contests Checked":0.2,"Public Can Recount with Copies of Ballots":2},"Oregon":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":0.2,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":4.1,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2.5,"Ratio Minority to Nonminority Turnout, 2018":0.4,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":4,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":3,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":1.5,"Public Can Recount with Copies of Ballots":3},"Pennsylvania":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":3,"Contribution Limits per 4 Years":0.2,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":3.3,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2.2,"Ratio Minority to Nonminority Turnout, 2018":2.3,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":0.2,"Do Votes Have a Paper Trail? 2022":4,"Hand Tally Audits, to Check Computer Tallies?":1,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":0.2},"Rhode Island":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":3,"Public Campaign $ for Gov+Legislature":3,"Turnout, % of Voting-age Citizens, 2020":2.2,"Ratio 18-24 Turnout to 25+ Turnout, 2018":4.3,"Ratio Minority to Nonminority Turnout, 2018":1.5,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":5,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":5,"Audit All Contests? Number of Contests Checked":0.5,"Public Can Recount with Copies of Ballots":4},"South Carolina":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":3.5,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":2,"Ratio 18-24 Turnout to 25+ Turnout, 2018":1.2,"Ratio Minority to Nonminority Turnout, 2018":4,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":0.2,"Do Votes Have a Paper Trail? 2022":4,"Hand Tally Audits, to Check Computer Tallies?":0.2,"Good Audit Sample, to Check Computer Tallies?":0.2,"Audit All Contests? Number of Contests Checked":0.2,"Public Can Recount with Copies of Ballots":4},"South Dakota":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":3,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":2.3,"Ratio 18-24 Turnout to 25+ Turnout, 2018":1.2,"Ratio Minority to Nonminority Turnout, 2018":0.8,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":3,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":0.2,"VBM Review: Rejection Rate, 2018":3,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":0.2,"Good Audit Sample, to Check Computer Tallies?":0.2,"Audit All Contests? Number of Contests Checked":0.2,"Public Can Recount with Copies of Ballots":4},"Tennessee":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":2.6,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":1.1,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2.4,"Ratio Minority to Nonminority Turnout, 2018":2.4,"Weekend Early Voting, State Minimum":3,"Access to Vote by Mail":0.2,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":0.2,"VBM Review: Rejection Rate, 2018":5,"Do Votes Have a Paper Trail? 2022":1.3,"Hand Tally Audits, to Check Computer Tallies?":0.2,"Good Audit Sample, to Check Computer Tallies?":0.2,"Audit All Contests? Number of Contests Checked":0.2,"Public Can Recount with Copies of Ballots":3},"Texas":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":0.2,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":1.2,"Ratio 18-24 Turnout to 25+ Turnout, 2018":1.7,"Ratio Minority to Nonminority Turnout, 2018":1,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":0.2,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":5,"Do Votes Have a Paper Trail? 2022":2.4,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":5},"Utah":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":0.2,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":2.9,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2.2,"Ratio Minority to Nonminority Turnout, 2018":0.6,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":4,"Number of Days when Voters Can Cure Signature Problems, after Election Day":4.4,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":3,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":2},"Virginia":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":0.2,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":3.7,"Ratio 18-24 Turnout to 25+ Turnout, 2018":3.1,"Ratio Minority to Nonminority Turnout, 2018":2.5,"Weekend Early Voting, State Minimum":2,"Access to Vote by Mail":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":0.2,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":2,"Audit All Contests? Number of Contests Checked":1,"Public Can Recount with Copies of Ballots":2},"Vermont":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":4.1,"Public Campaign $ for Gov+Legislature":3,"Turnout, % of Voting-age Citizens, 2020":3.9,"Ratio 18-24 Turnout to 25+ Turnout, 2018":2.7,"Ratio Minority to Nonminority Turnout, 2018":2.9,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":0.2,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":4,"Good Audit Sample, to Check Computer Tallies?":2,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":4},"Washington":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,"Contribution Limits per 4 Years":3.5,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":4.2,"Ratio 18-24 Turnout to 25+ Turnout, 2018":1.8,"Ratio Minority to Nonminority Turnout, 2018":2,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":4,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":5,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":3,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":0.5,"Public Can Recount with Copies of Ballots":0.2},"Wisconsin":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":4,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":4.2,"Ratio 18-24 Turnout to 25+ Turnout, 2018":3.5,"Ratio Minority to Nonminority Turnout, 2018":1.5,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":0.2,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":3,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":2,"Public Can Recount with Copies of Ballots":4},"West Virginia":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":1,"Public Campaign $ for Gov+Legislature":2,"Turnout, % of Voting-age Citizens, 2020":0.7,"Ratio 18-24 Turnout to 25+ Turnout, 2018":1.3,"Ratio Minority to Nonminority Turnout, 2018":0.9,"Weekend Early Voting, State Minimum":2,"Access to Vote by Mail":3,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":5,"Do Votes Have a Paper Trail? 2022":4,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":2},"Wyoming":{"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":0.2,"Contribution Limits per 4 Years":2.8,"Public Campaign $ for Gov+Legislature":0.2,"Turnout, % of Voting-age Citizens, 2020":2,"Ratio 18-24 Turnout to 25+ Turnout, 2018":0.2,"Ratio Minority to Nonminority Turnout, 2018":0.4,"Weekend Early Voting, State Minimum":0.2,"Access to Vote by Mail":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":0.2,"Good VBM List, Tracks Address Changes & Deaths":0.2,"VBM Review: Rejection Rate, 2018":0.2,"Do Votes Have a Paper Trail? 2022":4,"Hand Tally Audits, to Check Computer Tallies?":0.2,"Good Audit Sample, to Check Computer Tallies?":0.2,"Audit All Contests? Number of Contests Checked":0.2,"Public Can Recount with Copies of Ballots":4}}

var weights = {"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,"Contribution Limits per 4 Years":5,"Public Campaign $ for Gov+Legislature":5,"Turnout, % of Voting-age Citizens, 2020":5,"Ratio 18-24 Turnout to 25+ Turnout, 2018":5,"Ratio Minority to Nonminority Turnout, 2018":5,"Weekend Early Voting, State Minimum":5,"Access to Vote by Mail":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":5,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":5,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":5}

var weights_translate = {"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders","Contribution Limits per 4 Years":"Contrbution Limit per Candidate per 4 Years","Public Campaign $ for Gov+Legislature":"Public Campaign $ for Gov+Legislature","Turnout, % of Voting-age Citizens, 2020":"Turnout: % of Voting-age Citizens: 2020","Ratio 18-24 Turnout to 25+ Turnout, 2018":"Ratio of 18-24 Turnout to 25+ Turnout: 2018","Ratio Minority to Nonminority Turnout, 2018":"Ratio of Minority to White Non-Hispanic Turnout: 2018","Weekend Early Voting, State Minimum":"Weekend Early Voting: State Minimum","Access to Vote by Mail":"Access to Vote by Mail (VBM)","Number of Days when Voters Can Cure Signature Problems, after Election Day":"Number of Days when Voters Can Cure Signature Problems after Election Day","Good VBM List, Tracks Address Changes & Deaths":"Good VBM List Tracks Address Changes & Deaths","VBM Review: Rejection Rate, 2018":"VBM Review: Rejection Rate: 2018","Do Votes Have a Paper Trail? 2022":"Do Votes Have a Paper Trail? 2022","Hand Tally Audits, to Check Computer Tallies?":"Hand Tally Audits to Check Computer Tallies","Good Audit Sample, to Check Computer Tallies?":"Good Audit Sample to Check Computer Tallies","Audit All Contests? Number of Contests Checked":"Audit All Contests? Number of Contests Checked","Public Can Recount with Copies of Ballots":"Can Public Recount with Copies of Ballots"}

var weights2 = {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders":5,"Contribution Limits per 4 Years":5,"Public Campaign $ for Gov+Legislature":5,"Turnout % of Voting-age Citizens, 2020":5,"Ratio 18-24 Turnout to 25+ Turnout: 2018":5,"Ratio Minority to Nonminority Turnout: 2018":5,"Weekend Early Voting: State Minimum":5,"Access to Vote by Mail (VBM)":5,"Number of Days when Voters Can Cure Signature Problems after Election Day":5,"Good VBM List, Tracks Address Changes & Deaths":5,"VBM Review: Rejection Rate, 2018":5,"Do Votes Have a Paper Trail? 2022":5,"Hand Tally Audits to Check Computer Tallies?":5,"Good Audit Sample to Check Computer Tallies?":5,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":5}

var polygonSeries;
let stateList = {
    'Arizona': 'AZ',
    'Alabama': 'AL',
    'Alaska':'AK',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'Florida': 'FL',
    'Georgia': 'GA',
    'Hawaii': 'HI',
    'Idaho': 'ID',
    'Illinois': 'IL',
    'Indiana': 'IN',
    'Iowa': 'IA',
    'Kansas': 'KS',
    'Kentucky': 'KY',
    'Louisiana': 'LA',
    'Maine': 'ME',
    'Maryland': 'MD',
    'Massachusetts': 'MA',
    'Michigan': 'MI',
    'Minnesota': 'MN',
    'Mississippi': 'MS',
    'Missouri': 'MO',
    'Montana': 'MT',
    'Nebraska': 'NE',
    'Nevada': 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    'Ohio': 'OH',
    'Oklahoma': 'OK',
    'Oregon': 'OR',
    'Pennsylvania': 'PA',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    'Tennessee': 'TN',
    'Texas': 'TX',
    'Utah': 'UT',
    'Vermont': 'VT',
    'Virginia': 'VA',
    'Washington': 'WA',
    'West Virginia': 'WV',
    'Wisconsin': 'WI',
    'Wyoming': 'WY'
}

let initialList = {
    'AK': 'Alaska',
    'AL': 'Alabama',
    'AR': 'Arkansas',
    'AS': 'American Samoa',
    'AZ': 'Arizona',
    'CA': 'California',
    'CO': 'Colorado',
    'CT': 'Connecticut',
    'DC': 'District of Columbia',
    'DE': 'Delaware',
    'FL': 'Florida',
    'GA': 'Georgia',
    'GU': 'Guam',
    'HI': 'Hawaii',
    'IA': 'Iowa',
    'ID': 'Idaho',
    'IL': 'Illinois',
    'IN': 'Indiana',
    'KS': 'Kansas',
    'KY': 'Kentucky',
    'LA': 'Louisiana',
    'MA': 'Massachusetts',
    'MD': 'Maryland',
    'ME': 'Maine',
    'MI': 'Michigan',
    'MN': 'Minnesota',
    'MO': 'Missouri',
    'MP': 'Northern Mariana Islands',
    'MS': 'Mississippi',
    'MT': 'Montana',
    'NA': 'National',
    'NC': 'North Carolina',
    'ND': 'North Dakota',
    'NE': 'Nebraska',
    'NH': 'New Hampshire',
    'NJ': 'New Jersey',
    'NM': 'New Mexico',
    'NV': 'Nevada',
    'NY': 'New York',
    'OH': 'Ohio',
    'OK': 'Oklahoma',
    'OR': 'Oregon',
    'PA': 'Pennsylvania',
    'PR': 'Puerto Rico',
    'RI': 'Rhode Island',
    'SC': 'South Carolina',
    'SD': 'South Dakota',
    'TN': 'Tennessee',
    'TX': 'Texas',
    'UT': 'Utah',
    'VA': 'Virginia',
    'VI': 'Virgin Islands',
    'VT': 'Vermont',
    'WA': 'Washington',
    'WI': 'Wisconsin',
    'WV': 'West Virginia',
    'WY': 'Wyoming'
}

// let reportCard = {
//     "CO":{
//        "State_Name":"Colorado",
//        "Turnout, % of Voting-age Citizens":4.43190264,
//        "18-24 Turnout, Citizens, 2018":3.483726582,
//        "Minority Turnout, Citizens, 2018":2.873237323,
//        "Margin of Victory, State Legislature, 2018-19":2.32,
//        "Contribution Limits per 4 Years":4.7375,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":4,
//        "Weekend Early Voting Required":3,
//        "Access to Vote by Mail":4,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":5.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":3,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":5,
//        "Audit All Contests? Number of Contests Checked ":2.0,
//        "Public Can Recount with Copies of Ballots":5,
//        "Total Score":63.84636655,
//        "Grade":"A",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "RI":{
//        "State_Name":"Rhode Island ",
//        "Turnout, % of Voting-age Citizens":2.70831166,
//        "18-24 Turnout, Citizens, 2018":3.567939241,
//        "Minority Turnout, Citizens, 2018":2.357184634,
//        "Margin of Victory, State Legislature, 2018-19":3.11,
//        "Contribution Limits per 4 Years":3.25,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":5,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":5.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":5,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":5,
//        "Audit All Contests? Number of Contests Checked ":2.0,
//        "Public Can Recount with Copies of Ballots":5,
//        "Total Score":58.99343553,
//        "Grade":"A",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "MI":{
//        "State_Name":"Michigan ",
//        "Turnout, % of Voting-age Citizens":4.028987262,
//        "18-24 Turnout, Citizens, 2018":2.617539241,
//        "Minority Turnout, Citizens, 2018":4.285548305,
//        "Margin of Victory, State Legislature, 2018-19":2.135,
//        "Contribution Limits per 4 Years":4.08125,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,
//        "Weekend Early Voting Required":2,
//        "Access to Vote by Mail":5,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":3,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":2.2,
//        "Public Can Recount with Copies of Ballots":5,
//        "Total Score":58.34832481,
//        "Grade":"A",
//        "Process Ballots on Receipt, before Election Day?":1
//     },
//     "MT":{
//        "State_Name":"Montana",
//        "Turnout, % of Voting-age Citizens":3.901514488,
//        "18-24 Turnout, Citizens, 2018":3.219058228,
//        "Minority Turnout, Citizens, 2018":3.642223859,
//        "Margin of Victory, State Legislature, 2018-19":2.485,
//        "Contribution Limits per 4 Years":4.76375,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":3,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":2.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":3,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":2.6,
//        "Public Can Recount with Copies of Ballots":5,
//        "Total Score":57.61154658,
//        "Grade":"A",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "OH":{
//        "State_Name":"Ohio ",
//        "Turnout, % of Voting-age Citizens":2.993516258,
//        "18-24 Turnout, Citizens, 2018":1.246075949,
//        "Minority Turnout, Citizens, 2018":3.281124265,
//        "Margin of Victory, State Legislature, 2018-19":1.885,
//        "Contribution Limits per 4 Years":1.5,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":5,
//        "Access to Vote by Mail":5,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":5.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":5,
//        "Do Votes Have a Paper Trail? 2022":4.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":2.4,
//        "Public Can Recount with Copies of Ballots":5,
//        "Total Score":56.30571647,
//        "Grade":"A",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "WA":{
//        "State_Name":"Washington ",
//        "Turnout, % of Voting-age Citizens":4.319227471,
//        "18-24 Turnout, Citizens, 2018":2.725812658,
//        "Minority Turnout, Citizens, 2018":4.050289506,
//        "Margin of Victory, State Legislature, 2018-19":2.415,
//        "Contribution Limits per 4 Years":3.6875,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":4,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":5.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":5,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":1,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":2.0,
//        "Public Can Recount with Copies of Ballots":1,
//        "Total Score":54.19782964,
//        "Grade":"A",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "FL":{
//        "State_Name":"Florida ",
//        "Turnout, % of Voting-age Citizens":3.671081522,
//        "18-24 Turnout, Citizens, 2018":2.112263291,
//        "Minority Turnout, Citizens, 2018":3.223252398,
//        "Margin of Victory, State Legislature, 2018-19":3.46,
//        "Contribution Limits per 4 Years":3.6875,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":3,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":3.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":5,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":2.0,
//        "Public Can Recount with Copies of Ballots":5,
//        "Total Score":54.15409721,
//        "Grade":"A",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "CA":{
//        "State_Name":"California ",
//        "Turnout, % of Voting-age Citizens":3.163876893,
//        "18-24 Turnout, Citizens, 2018":2.785964557,
//        "Minority Turnout, Citizens, 2018":3.02381684,
//        "Margin of Victory, State Legislature, 2018-19":2.595,
//        "Contribution Limits per 4 Years":1.5,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":4,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":5.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":5,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":3,
//        "Good Audit Sample, to Check Computer Tallies?":1,
//        "Audit All Contests? Number of Contests Checked ":5.0,
//        "Public Can Recount with Copies of Ballots":2,
//        "Total Score":54.06865829,
//        "Grade":"A",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "HI":{
//        "State_Name":"Hawaii ",
//        "Turnout, % of Voting-age Citizens":1.405402259,
//        "18-24 Turnout, Citizens, 2018":1.414501266,
//        "Minority Turnout, Citizens, 2018":2.780201763,
//        "Margin of Victory, State Legislature, 2018-19":2.25,
//        "Contribution Limits per 4 Years":1.5,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,
//        "Weekend Early Voting Required":3,
//        "Access to Vote by Mail":5,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":5.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":3,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":2.0,
//        "Public Can Recount with Copies of Ballots":3,
//        "Total Score":53.35010529,
//        "Grade":"A",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "MA":{
//        "State_Name":"Massachusetts ",
//        "Turnout, % of Voting-age Citizens":3.742490059,
//        "18-24 Turnout, Citizens, 2018":2.617539241,
//        "Minority Turnout, Citizens, 2018":3.004303948,
//        "Margin of Victory, State Legislature, 2018-19":2.535,
//        "Contribution Limits per 4 Years":3.25,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":5,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":2.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":5,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":3.0,
//        "Public Can Recount with Copies of Ballots":3,
//        "Total Score":53.14933325,
//        "Grade":"A",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "IL":{
//        "State_Name":"Illinois ",
//        "Turnout, % of Voting-age Citizens":2.927214697,
//        "18-24 Turnout, Citizens, 2018":2.256627848,
//        "Minority Turnout, Citizens, 2018":3.041001862,
//        "Margin of Victory, State Legislature, 2018-19":3.285,
//        "Contribution Limits per 4 Years":1.5,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":3,
//        "Access to Vote by Mail":5,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":5.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":5,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":3,
//        "Good Audit Sample, to Check Computer Tallies?":1,
//        "Audit All Contests? Number of Contests Checked ":5.0,
//        "Public Can Recount with Copies of Ballots":2,
//        "Total Score":53.00984441,
//        "Grade":"A",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "KS":{
//        "State_Name":"Kansas ",
//        "Turnout, % of Voting-age Citizens":2.741289763,
//        "18-24 Turnout, Citizens, 2018":3.074693671,
//        "Minority Turnout, Citizens, 2018":3.42647762,
//        "Margin of Victory, State Legislature, 2018-19":2.84,
//        "Contribution Limits per 4 Years":4.125,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":3,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":5,
//        "Do Votes Have a Paper Trail? 2022":4.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":2.4,
//        "Public Can Recount with Copies of Ballots":5,
//        "Total Score":51.60746105,
//        "Grade":"A",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "NV":{
//        "State_Name":"Nevada ",
//        "Turnout, % of Voting-age Citizens":2.660813594,
//        "18-24 Turnout, Citizens, 2018":2.437083544,
//        "Minority Turnout, Citizens, 2018":2.018226881,
//        "Margin of Victory, State Legislature, 2018-19":2.72,
//        "Contribution Limits per 4 Years":1.5,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":4,
//        "Access to Vote by Mail":4,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":5.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":5,
//        "Do Votes Have a Paper Trail? 2022":4.0,
//        "Hand Tally Audits, to Check Computer Tallies?":2,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":5.0,
//        "Public Can Recount with Copies of Ballots":2,
//        "Total Score":51.33612402,
//        "Grade":"A",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "OR":{
//        "State_Name":"Oregon",
//        "Turnout, % of Voting-age Citizens":4.288820786,
//        "18-24 Turnout, Citizens, 2018":3.207027848,
//        "Minority Turnout, Citizens, 2018":2.378136837,
//        "Margin of Victory, State Legislature, 2018-19":2.55,
//        "Contribution Limits per 4 Years":1.0,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":4,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":5.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":3,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":2.4,
//        "Public Can Recount with Copies of Ballots":3,
//        "Total Score":50.82398547,
//        "Grade":"A",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "GA":{
//        "State_Name":"Georgia ",
//        "Turnout, % of Voting-age Citizens":3.040074961,
//        "18-24 Turnout, Citizens, 2018":2.954389873,
//        "Minority Turnout, Citizens, 2018":4.65925851,
//        "Margin of Victory, State Legislature, 2018-19":2.185,
//        "Contribution Limits per 4 Years":1.5,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":2,
//        "Access to Vote by Mail":3,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":3.4,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":5,
//        "Do Votes Have a Paper Trail? 2022":4.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":5,
//        "Audit All Contests? Number of Contests Checked ":2.0,
//        "Public Can Recount with Copies of Ballots":1,
//        "Total Score":50.73872334,
//        "Grade":"A",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "DE":{
//        "State_Name":"Delaware ",
//        "Turnout, % of Voting-age Citizens":3.512887866,
//        "18-24 Turnout, Citizens, 2018":2.27841259,
//        "Minority Turnout, Citizens, 2018":3.881839392,
//        "Margin of Victory, State Legislature, 2018-19":2.42,
//        "Contribution Limits per 4 Years":4.60625,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":5,
//        "Access to Vote by Mail":2,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":1,
//        "Do Votes Have a Paper Trail? 2022":4.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":5.0,
//        "Public Can Recount with Copies of Ballots":2,
//        "Total Score":50.69938985,
//        "Grade":"A",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "DC":{
//        "State_Name":"Dist.of Columbia ",
//        "Turnout, % of Voting-age Citizens":2.45664024,
//        "18-24 Turnout, Citizens, 2018":5.0,
//        "Minority Turnout, Citizens, 2018":4.522352989,
//        "Margin of Victory, State Legislature, 2018-19":1.0,
//        "Contribution Limits per 4 Years":1.0,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":2,
//        "Access to Vote by Mail":4,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":5,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":2.6,
//        "Public Can Recount with Copies of Ballots":3,
//        "Total Score":50.57899323,
//        "Grade":"A",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "UT":{
//        "State_Name":"Utah ",
//        "Turnout, % of Voting-age Citizens":3.271570084,
//        "18-24 Turnout, Citizens, 2018":2.761903797,
//        "Minority Turnout, Citizens, 2018":2.143582488,
//        "Margin of Victory, State Legislature, 2018-19":1.325,
//        "Contribution Limits per 4 Years":1.0,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":4,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":4.6,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":3,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":5.0,
//        "Public Can Recount with Copies of Ballots":2,
//        "Total Score":49.10205637,
//        "Grade":"B",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "AZ":{
//        "State_Name":"Arizona ",
//        "Turnout, % of Voting-age Citizens":2.750802789,
//        "18-24 Turnout, Citizens, 2018":2.749873418,
//        "Minority Turnout, Citizens, 2018":3.490235658,
//        "Margin of Victory, State Legislature, 2018-19":3.395,
//        "Contribution Limits per 4 Years":1.5,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":3,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":5.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":3,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":3,
//        "Good Audit Sample, to Check Computer Tallies?":1,
//        "Audit All Contests? Number of Contests Checked ":2.8,
//        "Public Can Recount with Copies of Ballots":1,
//        "Total Score":48.68591187,
//        "Grade":"B",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "IA":{
//        "State_Name":"Iowa",
//        "Turnout, % of Voting-age Citizens":3.924672387,
//        "18-24 Turnout, Citizens, 2018":2.65363038,
//        "Minority Turnout, Citizens, 2018":3.913440893,
//        "Margin of Victory, State Legislature, 2018-19":2.705,
//        "Contribution Limits per 4 Years":1.0,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":2,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":2.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":1,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":2.0,
//        "Public Can Recount with Copies of Ballots":3,
//        "Total Score":48.19674366,
//        "Grade":"B",
//        "Process Ballots on Receipt, before Election Day?":1
//     },
//     "NJ":{
//        "State_Name":"New Jersey",
//        "Turnout, % of Voting-age Citizens":4.248250901,
//        "18-24 Turnout, Citizens, 2018":2.400992405,
//        "Minority Turnout, Citizens, 2018":3.500391057,
//        "Margin of Victory, State Legislature, 2018-19":3.38,
//        "Contribution Limits per 4 Years":1.5875,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":4,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":5.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":5,
//        "Do Votes Have a Paper Trail? 2022":1.56,
//        "Hand Tally Audits, to Check Computer Tallies?":1,
//        "Good Audit Sample, to Check Computer Tallies?":1,
//        "Audit All Contests? Number of Contests Checked ":1.0,
//        "Public Can Recount with Copies of Ballots":3,
//        "Total Score":47.67713436,
//        "Grade":"B",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "VT":{
//        "State_Name":"Vermont ",
//        "Turnout, % of Voting-age Citizens":4.079301142,
//        "18-24 Turnout, Citizens, 2018":2.816708861,
//        "Minority Turnout, Citizens, 2018":3.713334761,
//        "Margin of Victory, State Legislature, 2018-19":3.835,
//        "Contribution Limits per 4 Years":4.20375,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":2,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":1,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":4,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":5.0,
//        "Public Can Recount with Copies of Ballots":1,
//        "Total Score":47.64809476,
//        "Grade":"B",
//        "Process Ballots on Receipt, before Election Day?":1
//     },
//     "WI":{
//        "State_Name":"Wisconsin ",
//        "Turnout, % of Voting-age Citizens":4.328998391,
//        "18-24 Turnout, Citizens, 2018":4.277731646,
//        "Minority Turnout, Citizens, 2018":3.658692446,
//        "Margin of Victory, State Legislature, 2018-19":2.795,
//        "Contribution Limits per 4 Years":4.125,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":2,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":1,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":3,
//        "Good Audit Sample, to Check Computer Tallies?":1,
//        "Audit All Contests? Number of Contests Checked ":2.6,
//        "Public Can Recount with Copies of Ballots":5,
//        "Total Score":46.78542248,
//        "Grade":"B",
//        "Process Ballots on Receipt, before Election Day?":1
//     },
//     "NY":{
//        "State_Name":"New York",
//        "Turnout, % of Voting-age Citizens":2.340743139,
//        "18-24 Turnout, Citizens, 2018":2.545356962,
//        "Minority Turnout, Citizens, 2018":2.959953847,
//        "Margin of Victory, State Legislature, 2018-19":1.75,
//        "Contribution Limits per 4 Years":1.5,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":5,
//        "Access to Vote by Mail":3,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":1,
//        "VBM Review: Rejection Rate, 2018":5,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":5.0,
//        "Public Can Recount with Copies of Ballots":1,
//        "Total Score":46.09605395,
//        "Grade":"B",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "MO":{
//        "State_Name":"Missouri",
//        "Turnout, % of Voting-age Citizens":2.721951828,
//        "18-24 Turnout, Citizens, 2018":3.519817722,
//        "Minority Turnout, Citizens, 2018":3.269268195,
//        "Margin of Victory, State Legislature, 2018-19":1.415,
//        "Contribution Limits per 4 Years":2.15625,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":4,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":2,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":1,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":2.8,
//        "Public Can Recount with Copies of Ballots":3,
//        "Total Score":45.88228774,
//        "Grade":"B",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "WV":{
//        "State_Name":"West Virginia ",
//        "Turnout, % of Voting-age Citizens":1.415080341,
//        "18-24 Turnout, Citizens, 2018":1.258106329,
//        "Minority Turnout, Citizens, 2018":1.0,
//        "Margin of Victory, State Legislature, 2018-19":3.525,
//        "Contribution Limits per 4 Years":1.5,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":3,
//        "Access to Vote by Mail":3,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":5,
//        "Do Votes Have a Paper Trail? 2022":4.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":5.0,
//        "Public Can Recount with Copies of Ballots":2,
//        "Total Score":45.69818667,
//        "Grade":"B",
//        "Process Ballots on Receipt, before Election Day?":1
//     },
//     "MN":{
//        "State_Name":"Minnesota ",
//        "Turnout, % of Voting-age Citizens":5.0,
//        "18-24 Turnout, Citizens, 2018":3.676212658,
//        "Minority Turnout, Citizens, 2018":4.057025557,
//        "Margin of Victory, State Legislature, 2018-19":2.29,
//        "Contribution Limits per 4 Years":4.125,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":2,
//        "Access to Vote by Mail":2,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":2.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":1,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":3,
//        "Good Audit Sample, to Check Computer Tallies?":1,
//        "Audit All Contests? Number of Contests Checked ":2.4,
//        "Public Can Recount with Copies of Ballots":2,
//        "Total Score":45.54823822,
//        "Grade":"B",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "VA":{
//        "State_Name":"Virginia ",
//        "Turnout, % of Voting-age Citizens":3.88532169,
//        "18-24 Turnout, Citizens, 2018":3.315301266,
//        "Minority Turnout, Citizens, 2018":4.026396293,
//        "Margin of Victory, State Legislature, 2018-19":1.0,
//        "Contribution Limits per 4 Years":1.0,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":3,
//        "Access to Vote by Mail":2,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":1,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":5,
//        "Audit All Contests? Number of Contests Checked ":2.0,
//        "Public Can Recount with Copies of Ballots":2,
//        "Total Score":45.22701925,
//        "Grade":"B",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "NM":{
//        "State_Name":"New Mexico ",
//        "Turnout, % of Voting-age Citizens":2.003403415,
//        "18-24 Turnout, Citizens, 2018":1.907746835,
//        "Minority Turnout, Citizens, 2018":2.21405709,
//        "Margin of Victory, State Legislature, 2018-19":3.09,
//        "Contribution Limits per 4 Years":1.5,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":3,
//        "Access to Vote by Mail":2,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":1,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":5,
//        "Audit All Contests? Number of Contests Checked ":2.6,
//        "Public Can Recount with Copies of Ballots":2,
//        "Total Score":43.31520734,
//        "Grade":"B",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "AK":{
//        "State_Name":"Alaska ",
//        "Turnout, % of Voting-age Citizens":3.206524728,
//        "18-24 Turnout, Citizens, 2018":3.246780407,
//        "Minority Turnout, Citizens, 2018":2.510621863,
//        "Margin of Victory, State Legislature, 2018-19":2.895,
//        "Contribution Limits per 4 Years":4.125,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":2,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":2,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":1,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":3,
//        "Good Audit Sample, to Check Computer Tallies?":1,
//        "Audit All Contests? Number of Contests Checked ":5.0,
//        "Public Can Recount with Copies of Ballots":1,
//        "Total Score":42.983927,
//        "Grade":"B",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "CT":{
//        "State_Name":"Connecticut",
//        "Turnout, % of Voting-age Citizens":3.64314808,
//        "18-24 Turnout, Citizens, 2018":2.761903797,
//        "Minority Turnout, Citizens, 2018":2.920349011,
//        "Margin of Victory, State Legislature, 2018-19":2.865,
//        "Contribution Limits per 4 Years":4.34375,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":2,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":1,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":2,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":2.4,
//        "Public Can Recount with Copies of Ballots":3,
//        "Total Score":42.93415089,
//        "Grade":"B",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "KY":{
//        "State_Name":"Kentucky ",
//        "Turnout, % of Voting-age Citizens":2.593748542,
//        "18-24 Turnout, Citizens, 2018":1.450592405,
//        "Minority Turnout, Citizens, 2018":4.029709042,
//        "Margin of Victory, State Legislature, 2018-19":2.94,
//        "Contribution Limits per 4 Years":2.375,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":3,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":1,
//        "VBM Review: Rejection Rate, 2018":5,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":2.0,
//        "Public Can Recount with Copies of Ballots":2,
//        "Total Score":42.38904999,
//        "Grade":"B",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "MD":{
//        "State_Name":"Maryland ",
//        "Turnout, % of Voting-age Citizens":3.581253597,
//        "18-24 Turnout, Citizens, 2018":3.074693671,
//        "Minority Turnout, Citizens, 2018":3.69161444,
//        "Margin of Victory, State Legislature, 2018-19":2.335,
//        "Contribution Limits per 4 Years":2.375,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":2,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":1,
//        "VBM Review: Rejection Rate, 2018":1,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":2.0,
//        "Public Can Recount with Copies of Ballots":5,
//        "Total Score":42.05756171,
//        "Grade":"B",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "ME":{
//        "State_Name":"Maine",
//        "Turnout, % of Voting-age Citizens":4.417487107,
//        "18-24 Turnout, Citizens, 2018":2.052111392,
//        "Minority Turnout, Citizens, 2018":2.904173151,
//        "Margin of Victory, State Legislature, 2018-19":3.19,
//        "Contribution Limits per 4 Years":4.475,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":3,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":5,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":1,
//        "Good Audit Sample, to Check Computer Tallies?":1,
//        "Audit All Contests? Number of Contests Checked ":1.0,
//        "Public Can Recount with Copies of Ballots":1,
//        "Total Score":42.03877165,
//        "Grade":"B",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "NC":{
//        "State_Name":"North Carolina ",
//        "Turnout, % of Voting-age Citizens":3.64108044,
//        "18-24 Turnout, Citizens, 2018":2.340840506,
//        "Minority Turnout, Citizens, 2018":3.567354797,
//        "Margin of Victory, State Legislature, 2018-19":2.18,
//        "Contribution Limits per 4 Years":1.5,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":2,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":5.0,
//        "Good VBM List, Tracks Address Changes & Deaths":1,
//        "VBM Review: Rejection Rate, 2018":1,
//        "Do Votes Have a Paper Trail? 2022":4.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":5,
//        "Audit All Contests? Number of Contests Checked ":2.0,
//        "Public Can Recount with Copies of Ballots":1,
//        "Total Score":41.22927574,
//        "Grade":"C",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "PA":{
//        "State_Name":"Pennsylvania",
//        "Turnout, % of Voting-age Citizens":3.572695476,
//        "18-24 Turnout, Citizens, 2018":2.509265823,
//        "Minority Turnout, Citizens, 2018":3.348295392,
//        "Margin of Victory, State Legislature, 2018-19":2.67,
//        "Contribution Limits per 4 Years":1.0,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":3,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":2,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":1,
//        "Do Votes Have a Paper Trail? 2022":4.0,
//        "Hand Tally Audits, to Check Computer Tallies?":2,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":5.0,
//        "Public Can Recount with Copies of Ballots":1,
//        "Total Score":41.10025669,
//        "Grade":"C",
//        "Process Ballots on Receipt, before Election Day?":1
//     },
//     "ID":{
//        "State_Name":"Idaho ",
//        "Turnout, % of Voting-age Citizens":3.077833691,
//        "18-24 Turnout, Citizens, 2018":1.113741772,
//        "Minority Turnout, Citizens, 2018":1.144815716,
//        "Margin of Victory, State Legislature, 2018-19":2.115,
//        "Contribution Limits per 4 Years":3.6875,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":3,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":1,
//        "VBM Review: Rejection Rate, 2018":5,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":1,
//        "Good Audit Sample, to Check Computer Tallies?":1,
//        "Audit All Contests? Number of Contests Checked ":1.0,
//        "Public Can Recount with Copies of Ballots":5,
//        "Total Score":40.13889118,
//        "Grade":"C",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "TX":{
//        "State_Name":"Texas ",
//        "Turnout, % of Voting-age Citizens":1.870076374,
//        "18-24 Turnout, Citizens, 2018":1.787443038,
//        "Minority Turnout, Citizens, 2018":2.285849729,
//        "Margin of Victory, State Legislature, 2018-19":2.105,
//        "Contribution Limits per 4 Years":1.0,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":1,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":5,
//        "Do Votes Have a Paper Trail? 2022":2.6,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":5.0,
//        "Public Can Recount with Copies of Ballots":1,
//        "Total Score":39.64836914,
//        "Grade":"C",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "AR":{
//        "State_Name":"Arkansas ",
//        "Turnout, % of Voting-age Citizens":1.172750765,
//        "18-24 Turnout, Citizens, 2018":1.414501266,
//        "Minority Turnout, Citizens, 2018":2.138681936,
//        "Margin of Victory, State Legislature, 2018-19":2.0,
//        "Contribution Limits per 4 Years":1.5,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":3,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":1,
//        "VBM Review: Rejection Rate, 2018":5,
//        "Do Votes Have a Paper Trail? 2022":4.0,
//        "Hand Tally Audits, to Check Computer Tallies?":5,
//        "Good Audit Sample, to Check Computer Tallies?":5,
//        "Audit All Contests? Number of Contests Checked ":2.0,
//        "Public Can Recount with Copies of Ballots":2,
//        "Total Score":38.22593397,
//        "Grade":"C",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "LA":{
//        "State_Name":"Louisiana ",
//        "Turnout, % of Voting-age Citizens":2.541461844,
//        "18-24 Turnout, Citizens, 2018":1.570896203,
//        "Minority Turnout, Citizens, 2018":3.42579583,
//        "Margin of Victory, State Legislature, 2018-19":3.916666667,
//        "Contribution Limits per 4 Years":1.71875,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":2,
//        "Access to Vote by Mail":1,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":5,
//        "Do Votes Have a Paper Trail? 2022":1.0,
//        "Hand Tally Audits, to Check Computer Tallies?":1,
//        "Good Audit Sample, to Check Computer Tallies?":1,
//        "Audit All Contests? Number of Contests Checked ":1.0,
//        "Public Can Recount with Copies of Ballots":5,
//        "Total Score":37.17357054,
//        "Grade":"C",
//        "Process Ballots on Receipt, before Election Day?":1
//     },
//     "SD":{
//        "State_Name":"South Dakota ",
//        "Turnout, % of Voting-age Citizens":2.758255649,
//        "18-24 Turnout, Citizens, 2018":1.70323038,
//        "Minority Turnout, Citizens, 2018":1.710693928,
//        "Margin of Victory, State Legislature, 2018-19":3.67,
//        "Contribution Limits per 4 Years":3.25,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":3,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":1,
//        "VBM Review: Rejection Rate, 2018":3,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":1,
//        "Good Audit Sample, to Check Computer Tallies?":1,
//        "Audit All Contests? Number of Contests Checked ":1.0,
//        "Public Can Recount with Copies of Ballots":5,
//        "Total Score":36.09217996,
//        "Grade":"C",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "SC":{
//        "State_Name":"South Carolina ",
//        "Turnout, % of Voting-age Citizens":2.525567848,
//        "18-24 Turnout, Citizens, 2018":1.438562025,
//        "Minority Turnout, Citizens, 2018":3.717857442,
//        "Margin of Victory, State Legislature, 2018-19":1.27,
//        "Contribution Limits per 4 Years":3.6875,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":2,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":1,
//        "Do Votes Have a Paper Trail? 2022":4.0,
//        "Hand Tally Audits, to Check Computer Tallies?":1,
//        "Good Audit Sample, to Check Computer Tallies?":1,
//        "Audit All Contests? Number of Contests Checked ":1.0,
//        "Public Can Recount with Copies of Ballots":5,
//        "Total Score":35.63948731,
//        "Grade":"C",
//        "Process Ballots on Receipt, before Election Day?":1
//     },
//     "NE":{
//        "State_Name":"Nebraska ",
//        "Turnout, % of Voting-age Citizens":3.386475442,
//        "18-24 Turnout, Citizens, 2018":2.388962025,
//        "Minority Turnout, Citizens, 2018":1.260244478,
//        "Margin of Victory, State Legislature, 2018-19":2.05,
//        "Contribution Limits per 4 Years":1.0,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":5,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":1,
//        "VBM Review: Rejection Rate, 2018":3,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":1,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":2.4,
//        "Public Can Recount with Copies of Ballots":2,
//        "Total Score":35.48568195,
//        "Grade":"C",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "IN":{
//        "State_Name":"Indiana ",
//        "Turnout, % of Voting-age Citizens":2.021956537,
//        "18-24 Turnout, Citizens, 2018":2.280688608,
//        "Minority Turnout, Citizens, 2018":2.754883886,
//        "Margin of Victory, State Legislature, 2018-19":2.845,
//        "Contribution Limits per 4 Years":1.0,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":3,
//        "Access to Vote by Mail":1,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":1,
//        "VBM Review: Rejection Rate, 2018":3,
//        "Do Votes Have a Paper Trail? 2022":2.32,
//        "Hand Tally Audits, to Check Computer Tallies?":1,
//        "Good Audit Sample, to Check Computer Tallies?":3,
//        "Audit All Contests? Number of Contests Checked ":5.0,
//        "Public Can Recount with Copies of Ballots":2,
//        "Total Score":34.22252903,
//        "Grade":"C",
//        "Process Ballots on Receipt, before Election Day?":1
//     },
//     "ND":{
//        "State_Name":"North Dakota",
//        "Turnout, % of Voting-age Citizens":2.515802162,
//        "18-24 Turnout, Citizens, 2018":2.883544304,
//        "Minority Turnout, Citizens, 2018":2.728988006,
//        "Margin of Victory, State Legislature, 2018-19":3.4,
//        "Contribution Limits per 4 Years":1.0,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":3,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":1,
//        "VBM Review: Rejection Rate, 2018":3,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":1,
//        "Good Audit Sample, to Check Computer Tallies?":1,
//        "Audit All Contests? Number of Contests Checked ":1.0,
//        "Public Can Recount with Copies of Ballots":2,
//        "Total Score":32.52833447,
//        "Grade":"C",
//        "Process Ballots on Receipt, before Election Day?":1
//     },
//     "AL":{
//        "State_Name":"Alabama",
//        "Turnout, % of Voting-age Citizens":2.303347617,
//        "18-24 Turnout, Citizens, 2018":2.136324051,
//        "Minority Turnout, Citizens, 2018":3.387626907,
//        "Margin of Victory, State Legislature, 2018-19":1.195,
//        "Contribution Limits per 4 Years":1.0,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":2,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":5,
//        "VBM Review: Rejection Rate, 2018":1,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":1,
//        "Good Audit Sample, to Check Computer Tallies?":1,
//        "Audit All Contests? Number of Contests Checked ":1.0,
//        "Public Can Recount with Copies of Ballots":3,
//        "Total Score":32.02229857,
//        "Grade":"C",
//        "Process Ballots on Receipt, before Election Day?":1
//     },
//     "NH":{
//        "State_Name":"New Hampshire",
//        "Turnout, % of Voting-age Citizens":4.278835382,
//        "18-24 Turnout, Citizens, 2018":3.002511392,
//        "Minority Turnout, Citizens, 2018":3.181001148,
//        "Margin of Victory, State Legislature, 2018-19":3.905,
//        "Contribution Limits per 4 Years":1.5,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":2,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":1,
//        "VBM Review: Rejection Rate, 2018":1,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":1,
//        "Good Audit Sample, to Check Computer Tallies?":1,
//        "Audit All Contests? Number of Contests Checked ":1.0,
//        "Public Can Recount with Copies of Ballots":1,
//        "Total Score":31.86734792,
//        "Grade":"C",
//        "Process Ballots on Receipt, before Election Day?":1
//     },
//     "TN":{
//        "State_Name":"Tennessee ",
//        "Turnout, % of Voting-age Citizens":1.771305755,
//        "18-24 Turnout, Citizens, 2018":2.280688608,
//        "Minority Turnout, Citizens, 2018":2.832983228,
//        "Margin of Victory, State Legislature, 2018-19":1.0,
//        "Contribution Limits per 4 Years":2.9,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":4,
//        "Access to Vote by Mail":1,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":1,
//        "VBM Review: Rejection Rate, 2018":5,
//        "Do Votes Have a Paper Trail? 2022":1.82,
//        "Hand Tally Audits, to Check Computer Tallies?":1,
//        "Good Audit Sample, to Check Computer Tallies?":1,
//        "Audit All Contests? Number of Contests Checked ":1.0,
//        "Public Can Recount with Copies of Ballots":3,
//        "Total Score":31.60497759,
//        "Grade":"C",
//        "Process Ballots on Receipt, before Election Day?":5
//     },
//     "MS":{
//        "State_Name":"Mississippi ",
//        "Turnout, % of Voting-age Citizens":1.830190608,
//        "18-24 Turnout, Citizens, 2018":1.751351899,
//        "Minority Turnout, Citizens, 2018":5.0,
//        "Margin of Victory, State Legislature, 2018-19":1.0,
//        "Contribution Limits per 4 Years":1.0,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":3,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":1,
//        "VBM Review: Rejection Rate, 2018":3,
//        "Do Votes Have a Paper Trail? 2022":1.86,
//        "Hand Tally Audits, to Check Computer Tallies?":1,
//        "Good Audit Sample, to Check Computer Tallies?":1,
//        "Audit All Contests? Number of Contests Checked ":1.0,
//        "Public Can Recount with Copies of Ballots":5,
//        "Total Score":30.44154251,
//        "Grade":"C",
//        "Process Ballots on Receipt, before Election Day?":1
//     },
//     "WY":{
//        "State_Name":"Wyoming ",
//        "Turnout, % of Voting-age Citizens":2.533496375,
//        "18-24 Turnout, Citizens, 2018":1.0,
//        "Minority Turnout, Citizens, 2018":1.473337158,
//        "Margin of Victory, State Legislature, 2018-19":2.775,
//        "Contribution Limits per 4 Years":3.03125,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":1,
//        "Access to Vote by Mail":2,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":1,
//        "VBM Review: Rejection Rate, 2018":1,
//        "Do Votes Have a Paper Trail? 2022":4.0,
//        "Hand Tally Audits, to Check Computer Tallies?":1,
//        "Good Audit Sample, to Check Computer Tallies?":1,
//        "Audit All Contests? Number of Contests Checked ":1.0,
//        "Public Can Recount with Copies of Ballots":5,
//        "Total Score":29.81308353,
//        "Grade":"C",
//        "Process Ballots on Receipt, before Election Day?":1
//     },
//     "OK":{
//        "State_Name":"Oklahoma ",
//        "Turnout, % of Voting-age Citizens":1.0,
//        "18-24 Turnout, Citizens, 2018":1.258106329,
//        "Minority Turnout, Citizens, 2018":2.516278017,
//        "Margin of Victory, State Legislature, 2018-19":2.59,
//        "Contribution Limits per 4 Years":3.81875,
//        "Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,
//        "Weekend Early Voting Required":2,
//        "Access to Vote by Mail":2,
//        "Number of Days when Voters Can Cure Signature Problems, after Election Day":1.0,
//        "Good VBM List, Tracks Address Changes & Deaths":1,
//        "VBM Review: Rejection Rate, 2018":1,
//        "Do Votes Have a Paper Trail? 2022":5.0,
//        "Hand Tally Audits, to Check Computer Tallies?":1,
//        "Good Audit Sample, to Check Computer Tallies?":1,
//        "Audit All Contests? Number of Contests Checked ":1.0,
//        "Public Can Recount with Copies of Ballots":2,
//        "Total Score":29.18313435,
//        "Grade":"C",
//        "Process Ballots on Receipt, before Election Day?":5
//     }
//  }

let reportCard = {"AK": {"Grade": {"Grade for Selected Aspects Below": "B"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "No signature checks"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "Nonpartisan: named by partisan officials: 1CD", "Contrbution Limit per Candidate per 4 Years": "$2000", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "69%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "71%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "67%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Hand count. Exclude small precincts ", "Good Audit Sample to Check Computer Tallies": "5%", "Audit All Contests? Number of Contests Checked": "All", "Can Public Recount with Copies of Ballots": "No ballots or images", "Total Score": "34.4"}}, "AL": {"Grade": {"Grade for Selected Aspects Below": "C"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "No signature checks"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "no limit", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "63%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "56%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "89%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "No audit", "Good Audit Sample to Check Computer Tallies": "0%", "Audit All Contests? Number of Contests Checked": "", "Can Public Recount with Copies of Ballots": "Unknown release policy", "Total Score": "22.5"}}, "AR": {"Grade": {"Grade for Selected Aspects Below": "C"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "No", "VBM Review: Rejection Rate: 2018": "7.6%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "Partisan officials", "Contrbution Limit per Candidate per 4 Years": "$8100", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "56%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "53%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "86%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "bmd", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "Statistical. After results are final", "Audit All Contests? Number of Contests Checked": "?", "Can Public Recount with Copies of Ballots": "No ballots. Availability of images unknown", "Total Score": "28.8"}}, "AZ": {"Grade": {"Grade for Selected Aspects Below": "A"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "7", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "0.5%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "Yes", "Contrbution Limit per Candidate per 4 Years": "$16485.55", "Public Campaign $ for Gov+Legislature": "Both"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "66%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "56%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "72%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Hand count. Exclude provisionals +counties where a party refuses", "Good Audit Sample to Check Computer Tallies": "1%-2%", "Audit All Contests? Number of Contests Checked": "5 random", "Can Public Recount with Copies of Ballots": "No ballots or images", "Total Score": "45.8"}}, "CA": {"Grade": {"Grade for Selected Aspects Below": "A"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: Ballot sent to all", "Number of Days when Voters Can Cure Signature Problems after Election Day": "8", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "2.0%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "Yes", "Contrbution Limit per Candidate per 4 Years": "$14100", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "68%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "65%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "72%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Hand count. Exclude ballots tallied after election day", "Good Audit Sample to Check Computer Tallies": "1%", "Audit All Contests? Number of Contests Checked": "All", "Can Public Recount with Copies of Ballots": "No ballots. Availability of images unknown", "Total Score": "48.6"}}, "CO": {"Grade": {"Grade for Selected Aspects Below": "A"}, "Access": {"Weekend Early Voting: State Minimum": "2Sat: last 2 Sat", "Access to Vote by Mail (VBM)": "Broad VBM: Ballot sent to all", "Number of Days when Voters Can Cure Signature Problems after Election Day": "8", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "0.8%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "Yes", "Contrbution Limit per Candidate per 4 Years": "$600", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "76%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "68%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "69%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "Statistical", "Audit All Contests? Number of Contests Checked": "2 have enough sample. Limited info on others", "Can Public Recount with Copies of Ballots": "Keep+release images & ballots after recount", "Total Score": "58.6"}}, "CT": {"Grade": {"Grade for Selected Aspects Below": "B"}, "Access": {"Weekend Early Voting: State Minimum": "No law", "Access to Vote by Mail (VBM)": "Broad VBM: Applic.sent to all", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "No signature checks"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "$900", "Public Campaign $ for Gov+Legislature": "Both"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "71%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "63%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "75%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Machines or hand. Exclude early+VBM+prov.", "Good Audit Sample to Check Computer Tallies": "5%. After results are final", "Audit All Contests? Number of Contests Checked": "3", "Can Public Recount with Copies of Ballots": "Law untested. Policy not to release", "Total Score": "34.7"}}, "DC": {"Grade": {"Grade for Selected Aspects Below": "A"}, "Access": {"Weekend Early Voting: State Minimum": "1Sat 8:30-7", "Access to Vote by Mail (VBM)": "Broad VBM: Ballot sent to all", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "3.6%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No: 1CD", "Contrbution Limit per Candidate per 4 Years": "no limit", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "64%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "87%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "79%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "5%", "Audit All Contests? Number of Contests Checked": "4 random", "Can Public Recount with Copies of Ballots": "Unknown release policy", "Total Score": "43.8"}}, "DE": {"Grade": {"Grade for Selected Aspects Below": "B"}, "Access": {"Weekend Early Voting: State Minimum": "4Sat+Sun. 8 hrs/day. 7am half the days", "Access to Vote by Mail (VBM)": "Broad VBM: Applic.sent to all", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "No signature checks"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No: 1CD", "Contrbution Limit per Candidate per 4 Years": "$900", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "71%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "57%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "95%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "bmd", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "2 machines per county. 3 districts in Wilmington", "Audit All Contests? Number of Contests Checked": "All", "Can Public Recount with Copies of Ballots": "No ballots. Availability of images unknown", "Total Score": "42.2"}}, "FL": {"Grade": {"Grade for Selected Aspects Below": "A"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "2", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "1.2%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "$3000", "Public Campaign $ for Gov+Legislature": "Gov+Cabinet"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "72%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "54%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "80%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "1%", "Audit All Contests? Number of Contests Checked": "1 random", "Can Public Recount with Copies of Ballots": "Keep images in many counties+release images+ballots", "Total Score": "48.8"}}, "GA": {"Grade": {"Grade for Selected Aspects Below": "B"}, "Access": {"Weekend Early Voting: State Minimum": "2Sat 9-5", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "3", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "No signature, use ID number"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "$8400", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "68%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "62%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "99%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "bmd", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "Statistical", "Audit All Contests? Number of Contests Checked": "1", "Can Public Recount with Copies of Ballots": "Keep images & release", "Total Score": "40.8"}}, "HI": {"Grade": {"Grade for Selected Aspects Below": "A"}, "Access": {"Weekend Early Voting: State Minimum": "2Sat 8-4:30 last 2 Sat", "Access to Vote by Mail (VBM)": "Broad VBM: Ballot to all+ Signature update from all", "Number of Days when Voters Can Cure Signature Problems after Election Day": "7", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "0.7%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "Yes", "Contrbution Limit per Candidate per 4 Years": "$8000", "Public Campaign $ for Gov+Legislature": "Both"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "58%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "51%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "84%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+vvpat4access", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "10%", "Audit All Contests? Number of Contests Checked": "?", "Can Public Recount with Copies of Ballots": "Unknown release policy", "Total Score": "52.8"}}, "IA": {"Grade": {"Grade for Selected Aspects Below": "B"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: Applic.sent to all", "Number of Days when Voters Can Cure Signature Problems after Election Day": "0", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "No signature checks"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "Yes", "Contrbution Limit per Candidate per 4 Years": "no limit", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "73%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "54%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "83%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "?", "Audit All Contests? Number of Contests Checked": "1", "Can Public Recount with Copies of Ballots": "Unknown release policy", "Total Score": "37.3"}}, "ID": {"Grade": {"Grade for Selected Aspects Below": "C"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "No", "VBM Review: Rejection Rate: 2018": "1.6%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "Yes", "Contrbution Limit per Candidate per 4 Years": "$3000", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "68%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "41%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "60%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "No audit unless recount happens", "Good Audit Sample to Check Computer Tallies": "0%", "Audit All Contests? Number of Contests Checked": "", "Can Public Recount with Copies of Ballots": "Yes after recount. Unknown if images kept", "Total Score": "30.6"}}, "IL": {"Grade": {"Grade for Selected Aspects Below": "A"}, "Access": {"Weekend Early Voting: State Minimum": "2Sat+Sun: 14 hours on last Sat+Sun", "Access to Vote by Mail (VBM)": "Broad VBM: Applic.sent to all", "Number of Days when Voters Can Cure Signature Problems after Election Day": "14", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "2.2%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "$17400", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "67%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "55%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "77%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Audit by using different machine. Exclude VBM+ provisional", "Good Audit Sample to Check Computer Tallies": "5%", "Audit All Contests? Number of Contests Checked": "All", "Can Public Recount with Copies of Ballots": "No ballots. Availability of images unknown", "Total Score": "46.8"}}, "IN": {"Grade": {"Grade for Selected Aspects Below": "C"}, "Access": {"Weekend Early Voting: State Minimum": "2Sat: last 2", "Access to Vote by Mail (VBM)": "VBM for limited reasons", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "No", "VBM Review: Rejection Rate: 2018": "0.5%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "no limit", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "61%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "60%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "83%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "dre34% bmd30%", "Hand Tally Audits to Check Computer Tallies": "Not required", "Good Audit Sample to Check Computer Tallies": "0%", "Audit All Contests? Number of Contests Checked": "", "Can Public Recount with Copies of Ballots": "No ballots. Availability of images unknown", "Total Score": "17.1"}}, "KS": {"Grade": {"Grade for Selected Aspects Below": "A"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "1.1%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "$2000", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "66%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "63%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "79%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "bmd28% hmpb71%", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "1%", "Audit All Contests? Number of Contests Checked": "3-4", "Can Public Recount with Copies of Ballots": "Yes after certification; but 28% DRE", "Total Score": "42.4"}}, "KY": {"Grade": {"Grade for Selected Aspects Below": "C"}, "Access": {"Weekend Early Voting: State Minimum": "No law", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "No", "VBM Review: Rejection Rate: 2018": "6.8%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "$6000", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "65%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "42%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "95%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb. Accessibility by bmd or dre without vvpat", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "3%", "Audit All Contests? Number of Contests Checked": "?", "Can Public Recount with Copies of Ballots": "No ballots. Availability of images unknown", "Total Score": "33.2"}}, "LA": {"Grade": {"Grade for Selected Aspects Below": "C"}, "Access": {"Weekend Early Voting: State Minimum": "1Sat 8:30-6 M-Sa", "Access to Vote by Mail (VBM)": "VBM for limited reasons", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "5.9%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "$7500", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "65%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "47%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "91%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "dre100%,noVvpat", "Hand Tally Audits to Check Computer Tallies": "No audit", "Good Audit Sample to Check Computer Tallies": "0%", "Audit All Contests? Number of Contests Checked": "", "Can Public Recount with Copies of Ballots": "Yes; but 100% DRE", "Total Score": "21.2"}}, "MA": {"Grade": {"Grade for Selected Aspects Below": "A"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: Applic.sent to all", "Number of Days when Voters Can Cure Signature Problems after Election Day": "0", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "5.8%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "$4000", "Public Campaign $ for Gov+Legislature": "Statewide"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "72%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "58%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "75%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "3%", "Audit All Contests? Number of Contests Checked": "6. 1 is random", "Can Public Recount with Copies of Ballots": "Unknown release policy. Not keep images", "Total Score": "47.8"}}, "MD": {"Grade": {"Grade for Selected Aspects Below": "B"}, "Access": {"Weekend Early Voting: State Minimum": "2Sat+Sun: last weekend", "Access to Vote by Mail (VBM)": "Broad VBM: Applic.sent to all", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "No", "VBM Review: Rejection Rate: 2018": "No signature checks"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "$6000", "Public Campaign $ for Gov+Legislature": "Gov+Lt.Gov"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "71%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "66%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "83%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Hand count & independent tally of 100% images", "Good Audit Sample to Check Computer Tallies": "1%-2%. After results are final", "Audit All Contests? Number of Contests Checked": "?", "Can Public Recount with Copies of Ballots": "Keep+release images & ballots after recount", "Total Score": "36.6"}}, "ME": {"Grade": {"Grade for Selected Aspects Below": "B"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "1.1%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "$496.5", "Public Campaign $ for Gov+Legislature": "Both"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "76%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "42%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "64%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "No audit", "Good Audit Sample to Check Computer Tallies": "0%", "Audit All Contests? Number of Contests Checked": "", "Can Public Recount with Copies of Ballots": "No ballots or images", "Total Score": "35.0"}}, "MI": {"Grade": {"Grade for Selected Aspects Below": "A"}, "Access": {"Weekend Early Voting: State Minimum": "1Sat+/orSun: 8hrs in last weekend", "Access to Vote by Mail (VBM)": "Broad VBM: Applic.sent to all", "Number of Days when Voters Can Cure Signature Problems after Election Day": "0", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "0.6%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "Yes", "Contrbution Limit per Candidate per 4 Years": "$2100", "Public Campaign $ for Gov+Legislature": "Gov"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "74%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "54%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "87%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "5%. After results are final", "Audit All Contests? Number of Contests Checked": "1", "Can Public Recount with Copies of Ballots": "Yes ballots; most don't keep images", "Total Score": "52.9"}}, "MN": {"Grade": {"Grade for Selected Aspects Below": "B"}, "Access": {"Weekend Early Voting: State Minimum": "1Sat 10-3: last Sat", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "0", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "No signature checks"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "$2000", "Public Campaign $ for Gov+Legislature": "Both"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "80%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "65%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "79%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Hand count. Exclude primaries", "Good Audit Sample to Check Computer Tallies": "3%", "Audit All Contests? Number of Contests Checked": "3", "Can Public Recount with Copies of Ballots": "No ballots. Availability of images unknown", "Total Score": "39.9"}}, "MO": {"Grade": {"Grade for Selected Aspects Below": "B"}, "Access": {"Weekend Early Voting: State Minimum": "No law", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "No signature checks"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "Staff goals: competitive + fair", "Contrbution Limit per Candidate per 4 Years": "$6500", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "66%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "73%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "81%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "5%", "Audit All Contests? Number of Contests Checked": "5", "Can Public Recount with Copies of Ballots": "Unknown release policy", "Total Score": "39.2"}}, "MS": {"Grade": {"Grade for Selected Aspects Below": "C"}, "Access": {"Weekend Early Voting: State Minimum": "No law", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "No", "VBM Review: Rejection Rate: 2018": "0.8%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "no limit", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "60%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "46%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "112%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "dre57% hmpb43%", "Hand Tally Audits to Check Computer Tallies": "No audit", "Good Audit Sample to Check Computer Tallies": "0%", "Audit All Contests? Number of Contests Checked": "", "Can Public Recount with Copies of Ballots": "Yes after canvass; but 57% DRE", "Total Score": "20.5"}}, "MT": {"Grade": {"Grade for Selected Aspects Below": "A"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: County option to send ballot", "Number of Days when Voters Can Cure Signature Problems after Election Day": "0", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "0.4%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "Yes: 1 CD", "Contrbution Limit per Candidate per 4 Years": "$540", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "73%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "58%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "74%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "5%", "Audit All Contests? Number of Contests Checked": "4 random", "Can Public Recount with Copies of Ballots": "Yes. Unknown if images kept", "Total Score": "49.7"}}, "NC": {"Grade": {"Grade for Selected Aspects Below": "C"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "8", "Good VBM List Tracks Address Changes & Deaths": "No", "VBM Review: Rejection Rate: 2018": "No signature checks"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "$16200", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "71%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "57%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "88%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "bmd14% hmpb86%", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "Statistical", "Audit All Contests? Number of Contests Checked": "1", "Can Public Recount with Copies of Ballots": "No ballots or images", "Total Score": "31.1"}}, "ND": {"Grade": {"Grade for Selected Aspects Below": "C"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "No", "VBM Review: Rejection Rate: 2018": "0.6%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No: 1CD", "Contrbution Limit per Candidate per 4 Years": "no limit", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "64%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "55%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "65%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "No audit", "Good Audit Sample to Check Computer Tallies": "0%", "Audit All Contests? Number of Contests Checked": "", "Can Public Recount with Copies of Ballots": "No ballots. Availability of images unknown", "Total Score": "19.6"}}, "NE": {"Grade": {"Grade for Selected Aspects Below": "C"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: Applic.sent to all", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "No", "VBM Review: Rejection Rate: 2018": "0.9%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "no limit", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "70%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "60%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "58%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Not required", "Good Audit Sample to Check Computer Tallies": "0%", "Audit All Contests? Number of Contests Checked": "", "Can Public Recount with Copies of Ballots": "No ballots. Availability of images unknown", "Total Score": "22.5"}}, "NH": {"Grade": {"Grade for Selected Aspects Below": "C"}, "Access": {"Weekend Early Voting: State Minimum": "No law", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "No", "VBM Review: Rejection Rate: 2018": "No signature checks"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "$15000", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "75%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "63%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "79%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "No audit", "Good Audit Sample to Check Computer Tallies": "0%", "Audit All Contests? Number of Contests Checked": "", "Can Public Recount with Copies of Ballots": "No ballots or images", "Total Score": "18.0"}}, "NJ": {"Grade": {"Grade for Selected Aspects Below": "B"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: Ballot sent to all", "Number of Days when Voters Can Cure Signature Problems after Election Day": "15", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "2.9%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "Yes", "Contrbution Limit per Candidate per 4 Years": "$7800", "Public Campaign $ for Gov+Legislature": "Gov"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "75%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "56%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "82%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "dre72% bmd16%", "Hand Tally Audits to Check Computer Tallies": "No audit of dre", "Good Audit Sample to Check Computer Tallies": "0%", "Audit All Contests? Number of Contests Checked": "", "Can Public Recount with Copies of Ballots": "Unknown release policy", "Total Score": "41.4"}}, "NM": {"Grade": {"Grade for Selected Aspects Below": "B"}, "Access": {"Weekend Early Voting: State Minimum": "2Sat: 8hrs each, last 2 Sat", "Access to Vote by Mail (VBM)": "Broad VBM: County option to send applic.", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "No signature checks"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "$15000", "Public Campaign $ for Gov+Legislature": "Justices"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "61%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "55%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "62%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "Statistical", "Audit All Contests? Number of Contests Checked": "4", "Can Public Recount with Copies of Ballots": "No ballots. Availability of images unknown", "Total Score": "34.6"}}, "NV": {"Grade": {"Grade for Selected Aspects Below": "A"}, "Access": {"Weekend Early Voting: State Minimum": "3Sat: 4+hours each last 3 Sat", "Access to Vote by Mail (VBM)": "Broad VBM: Ballot sent to all", "Number of Days when Voters Can Cure Signature Problems after Election Day": "7", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "2.1%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "$15000", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "65%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "64%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "65%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "vvpat on dre", "Hand Tally Audits to Check Computer Tallies": "Machines or by hand ", "Good Audit Sample to Check Computer Tallies": "2%", "Audit All Contests? Number of Contests Checked": "All", "Can Public Recount with Copies of Ballots": "No ballots. Availability of images unknown", "Total Score": "44.2"}}, "NY": {"Grade": {"Grade for Selected Aspects Below": "B"}, "Access": {"Weekend Early Voting: State Minimum": "4Sat+Sun 5+hrs both weekends", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "No", "VBM Review: Rejection Rate: 2018": "13.7%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "$19050", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "63%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "65%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "82%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "3%", "Audit All Contests? Number of Contests Checked": "All", "Can Public Recount with Copies of Ballots": "No ballots or images", "Total Score": "40.1"}}, "OH": {"Grade": {"Grade for Selected Aspects Below": "A"}, "Access": {"Weekend Early Voting: State Minimum": "5Sat: 8-4 last 4 Sat 8-4. last Sun 1-5", "Access to Vote by Mail (VBM)": "Broad VBM: Applic.sent to all", "Number of Days when Voters Can Cure Signature Problems after Election Day": "7", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "1.2%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "Partisan officials", "Contrbution Limit per Candidate per 4 Years": "$39886.05", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "67%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "40%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "85%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "bmd34% hmpb49%", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "5%", "Audit All Contests? Number of Contests Checked": "3 random", "Can Public Recount with Copies of Ballots": "Keep images in many counties. Release images & ballots after recount", "Total Score": "51.6"}}, "OK": {"Grade": {"Grade for Selected Aspects Below": "C"}, "Access": {"Weekend Early Voting: State Minimum": "1Sat 9-2", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "No", "VBM Review: Rejection Rate: 2018": "No signature checks"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "$2700", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "55%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "43%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "76%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb. Accessibility by dre without vvpat", "Hand Tally Audits to Check Computer Tallies": "Not required", "Good Audit Sample to Check Computer Tallies": "0%", "Audit All Contests? Number of Contests Checked": "", "Can Public Recount with Copies of Ballots": "No ballots. Availability of images unknown", "Total Score": "17.1"}}, "OR": {"Grade": {"Grade for Selected Aspects Below": "B"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: Ballot sent to all", "Number of Days when Voters Can Cure Signature Problems after Election Day": "14", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "0.0%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "no limit", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "76%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "61%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "60%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "3-10%", "Audit All Contests? Number of Contests Checked": "3", "Can Public Recount with Copies of Ballots": "Unknown release policy", "Total Score": "42.3"}}, "PA": {"Grade": {"Grade for Selected Aspects Below": "C"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "No signature checks"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "Local races only", "Contrbution Limit per Candidate per 4 Years": "no limit", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "71%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "57%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "82%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "bmd31% hmpb69%", "Hand Tally Audits to Check Computer Tallies": "Machines or by hand ", "Good Audit Sample to Check Computer Tallies": "2%", "Audit All Contests? Number of Contests Checked": "All", "Can Public Recount with Copies of Ballots": "No ballots or images", "Total Score": "31.0"}}, "RI": {"Grade": {"Grade for Selected Aspects Below": "A"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: Applic.sent to all", "Number of Days when Voters Can Cure Signature Problems after Election Day": "7", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "2.9%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "$4000", "Public Campaign $ for Gov+Legislature": "Statewide"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "66%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "79%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "72%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "Statistical", "Audit All Contests? Number of Contests Checked": "1", "Can Public Recount with Copies of Ballots": "Yes. Unknown if images kept", "Total Score": "53.9"}}, "SC": {"Grade": {"Grade for Selected Aspects Below": "C"}, "Access": {"Weekend Early Voting: State Minimum": "No law", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "No signature checks"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "$3000", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "65%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "47%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "101%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "bmd", "Hand Tally Audits to Check Computer Tallies": "No audit", "Good Audit Sample to Check Computer Tallies": "0%", "Audit All Contests? Number of Contests Checked": "", "Can Public Recount with Copies of Ballots": "Yes. Unknown if images kept", "Total Score": "26.3"}}, "SD": {"Grade": {"Grade for Selected Aspects Below": "C"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "No", "VBM Review: Rejection Rate: 2018": "0.3%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No: 1CD", "Contrbution Limit per Candidate per 4 Years": "$4000", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "66%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "47%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "64%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "No audit", "Good Audit Sample to Check Computer Tallies": "0%", "Audit All Contests? Number of Contests Checked": "", "Can Public Recount with Copies of Ballots": "Yes. Unknown if images kept", "Total Score": "23.8"}}, "TN": {"Grade": {"Grade for Selected Aspects Below": "C"}, "Access": {"Weekend Early Voting: State Minimum": "3Sat 3 hours each: last 3 Sat", "Access to Vote by Mail (VBM)": "VBM for limited reasons", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "No", "VBM Review: Rejection Rate: 2018": "2.2%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "$4800", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "60%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "60%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "82%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "dre59% bmd27%", "Hand Tally Audits to Check Computer Tallies": "No audit of dre", "Good Audit Sample to Check Computer Tallies": "0%", "Audit All Contests? Number of Contests Checked": "", "Can Public Recount with Copies of Ballots": "Unknown release policy", "Total Score": "22.5"}}, "TX": {"Grade": {"Grade for Selected Aspects Below": "B"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "VBM for limited reasons", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "1.8%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "no limit", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "60%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "52%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "67%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "dre20% bmd67%", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "1%", "Audit All Contests? Number of Contests Checked": "All", "Can Public Recount with Copies of Ballots": "Keep+release images & ballots after 22 months. 20% DRE", "Total Score": "35.6"}}, "UT": {"Grade": {"Grade for Selected Aspects Below": "A"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: Ballot sent to all", "Number of Days when Voters Can Cure Signature Problems after Election Day": "6", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "0.9%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "Gov. names tiebreaker", "Contrbution Limit per Candidate per 4 Years": "no limit", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "69%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "57%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "62%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "1%", "Audit All Contests? Number of Contests Checked": "All ex.Judge", "Can Public Recount with Copies of Ballots": "No ballots. Availability of images unknown", "Total Score": "42.8"}}, "VA": {"Grade": {"Grade for Selected Aspects Below": "B"}, "Access": {"Weekend Early Voting: State Minimum": "2Sat 8-5 last 2 Sat", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "No signature checks"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "no limit", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "73%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "67%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "84%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "Statistical. After results are final", "Audit All Contests? Number of Contests Checked": "?", "Can Public Recount with Copies of Ballots": "No ballots. Availability of images unknown", "Total Score": "33.3"}}, "VT": {"Grade": {"Grade for Selected Aspects Below": "A"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: Ballot sent to all", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "No signature checks"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No: 1CD", "Contrbution Limit per Candidate per 4 Years": "$1820", "Public Campaign $ for Gov+Legislature": "Gov+Lt.Gov"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "74%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "62%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "88%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Audit by using different machine", "Good Audit Sample to Check Computer Tallies": "6 towns. After results are final", "Audit All Contests? Number of Contests Checked": "All", "Can Public Recount with Copies of Ballots": "Yes ballots after 3 months. Image keeping+release unknown", "Total Score": "43.3"}}, "WA": {"Grade": {"Grade for Selected Aspects Below": "A"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: Ballot sent to all", "Number of Days when Voters Can Cure Signature Problems after Election Day": "21", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "1.0%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "Yes", "Contrbution Limit per Candidate per 4 Years": "$3000", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "76%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "53%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "78%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Hand count. Except.can audit just in-person machines", "Good Audit Sample to Check Computer Tallies": "1%-4%", "Audit All Contests? Number of Contests Checked": "1-3", "Can Public Recount with Copies of Ballots": "No ballots or images", "Total Score": "45.6"}}, "WI": {"Grade": {"Grade for Selected Aspects Below": "B"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: Applic.sent to all", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "No signature checks"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "$2000", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "76%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "72%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "72%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "hmpb+bmd4access", "Hand Tally Audits to Check Computer Tallies": "Hand count. Exclude primaries+early+VBM+prov. ballots ", "Good Audit Sample to Check Computer Tallies": "5%", "Audit All Contests? Number of Contests Checked": "4", "Can Public Recount with Copies of Ballots": "Yes. Unknown if images kept", "Total Score": "35.2"}}, "WV": {"Grade": {"Grade for Selected Aspects Below": "B"}, "Access": {"Weekend Early Voting: State Minimum": "2Sat: 9-5 last 2 Sat", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "Yes", "VBM Review: Rejection Rate: 2018": "1.0%"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No", "Contrbution Limit per Candidate per 4 Years": "$8400", "Public Campaign $ for Gov+Legislature": "Justices"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "58%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "48%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "66%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "bmd67% vvpat29%", "Hand Tally Audits to Check Computer Tallies": "Hand count", "Good Audit Sample to Check Computer Tallies": "3%", "Audit All Contests? Number of Contests Checked": "All", "Can Public Recount with Copies of Ballots": "No ballots. Availability of images unknown", "Total Score": "40.3"}}, "WY": {"Grade": {"Grade for Selected Aspects Below": "C"}, "Access": {"Weekend Early Voting: State Minimum": "No rule", "Access to Vote by Mail (VBM)": "Broad VBM: if Voter asks", "Number of Days when Voters Can Cure Signature Problems after Election Day": "No cure", "Good VBM List Tracks Address Changes & Deaths": "No", "VBM Review: Rejection Rate: 2018": "No signature checks"}, "Campaigns": {"Nonpartisan or Bipartisan Redistricting to Avoid Gerrymanders": "No: 1CD", "Contrbution Limit per Candidate per 4 Years": "$4500", "Public Campaign $ for Gov+Legislature": "No"}, "Turnout": {"Turnout: % of Voting-age Citizens: 2020": "65%", "Ratio of 18-24 Turnout to 25+ Turnout: 2018": "37%", "Ratio of Minority to White Non-Hispanic Turnout: 2018": "60%"}, "Checking": {"Do Votes Have a Paper Trail? 2022": "bmd16% hmpb84%", "Hand Tally Audits to Check Computer Tallies": "No audit", "Good Audit Sample to Check Computer Tallies": "0%", "Audit All Contests? Number of Contests Checked": "", "Can Public Recount with Copies of Ballots": "Yes. Unknown if images kept", "Total Score": "16.2"}}}

let reportCardShow = JSON.parse(JSON.stringify(reportCard));
let grades = {}

// weights = {}
// Object.entries(reportCardShow).forEach(([k,v]) => { 
//    Object.entries(v).forEach(([k2,v2]) => { 
//       if(k2!="Grade") {
//          Object.entries(v2).forEach(([k3,v3]) => { 
//             weights[k3] = 5
//          })
//       }
   
//    })
//  })

//  console.log(weights)

function calculateGrades(){
   let state_grades = []
   Object.entries(stateList).forEach(([k,v]) => {
      let stateInfo = data[k]
      let aggregate = 0
    //   console.log(k)
      Object.entries(stateInfo).forEach(([k2,v2]) => { 
          // console.log(parseInt(weights[k2])) 
          // console.log(parseInt(v2)) 
          aggregate += (parseInt(v2) * parseInt(weights[k2]))
          // console.log(aggregate)
      })
      state_grades.push([k, aggregate])
  })
  state_grades.sort(function(a,b){return a[1]-b[1]});
  console.log(state_grades)
  for (let index = 0; index < state_grades.length; index++) {
      const state = state_grades[index];
      if(index<16){
        grades[state[0]] = 'C'
      }
      else if (index<33){
        grades[state[0]] = 'B'
      }
      else if (index<50){
        grades[state[0]] = 'A'
      }
  }
  console.log('grades!')
  console.log(grades)
  console.log(weights)
  console.log(data)
}

//CONVERT FROM JSON TO AMCHARTS FRIENDLY INPUT
function createMapData(){
    let res = []
    calculateGrades()
    Object.entries(stateList).forEach(([k,v]) => {
        let obj = {}
        let stateInfo = data[k]
        let aggregate = 0
        console.log(k)
        Object.entries(stateInfo).forEach(([k2,v2]) => { 
            // console.log(parseInt(weights[k2])) 
            // console.log(parseInt(v2)) 
            aggregate += (parseInt(v2) * parseInt(weights[k2]))
            // console.log(aggregate)
        })
        obj['id'] = 'US-' + v
        obj['value'] = aggregate
        console.log(v)
        obj['grade'] = grades[k]
        // console.log(obj)
        res.push(obj)
    })
    console.log(res)
    polygonSeries.data = res
    polygonSeries.events.on("hit", function(ev) {
        // zoom to an object
        console.log(ev)
        // ev.target.series.chart.zoomToMapObject(ev.target);
       
        // // get object info
        // console.log(ev.target.dataItem.dataContext.name);
      });
    // polygonSeries.addListener("clickMapObject", function(event){
    //     alert(event.mapObject.infoTitle)
    //     // $('#tempInfo').html(event.mapObject.infoTitle); // Changes with clicking
    // });
    // polygonSeries.tooltip.tooltipText = "grade"
    return
}

//UPDATE CHART WHENEVER WEIGHTS CHANGE
function updateChart(){
   reportCardShow = JSON.parse(JSON.stringify(reportCard));
    Object.entries(weights).forEach(([k,v]) => { 
        console.log(k)
        id = weights_translate[k]
        console.log(id)
        console.log(document.getElementById(id))
        console.log(document.getElementById(id).value)
        if(document.getElementById(id).value){
            weights[k] = parseInt(document.getElementById(id).value)
        }
        else{
            weights[k] = 0
        }
    })
    createMapData()
    return
}

//RESET TO ORIGINAL CHART WEIGHTS
function resetChart(){
    Object.entries(weights).forEach(([k,v]) => { 
        weights[k] = 5
    })
    createMapData()
    return
}

//CREATE HTML FOR SIDE BAR / SETTINGS SECTION
function createWeightsHTML(){
    let html = '<h2>Voting Rights Map: ' + 'Settings' + '</h2>'
    html += '<hr>'
    html += '<form class="needs-validation" novalidate>'
    let showJSON = reportCardShow['FL']
    console.log('here')
    console.log(showJSON)
    Object.entries(showJSON).forEach(([k,v]) => { 
      if(k!="Grade") {
         html += '<h3><b>' + k + '</b></h3>'  
         Object.entries(v).forEach(([k2,v2]) => { 
            // if(k2=='Total Score'){break;}
            if (k2!='Total Score'){
                  // console.log('key')
                  // console.log(k)
                  // console.log('val')
                  // console.log(v)
                  // html += '<p><b>' + k2 + '</b> ' + v2 + '</p>'
                  html += '<div class="form-group">'
                  html += '<label for="uname">'+ k2 +'</label>'
                  html += '<input type="text" class="form-control" id="' + k2 + '"' + 'placeholder="Enter weight" name="uname" required>'
                  html += '<div class="valid-feedback">Valid.</div>'
                  html += '<div class="invalid-feedback">Please fill out this field.</div>'
                  html += '</div>'
                  // html += '<p>' + k + ': ' + v + '/5 </p>'

            }
         })
         html += '<br>'
      }
    })

    html += '<button type="button" onclick="updateChart()" class="btn btn-primary" style="margin: 15px;">Submit</button>'
    html += '<button type="button" onclick="resetChart()" class="btn btn-primary" style="margin: 15px;">Reset</button>'
    html += '</form>'
    //TODO: update this
   //  html = '<h2>Voting Rights Report Card: ' + 'Select a state' + '</h2>'
    document.getElementById('weights-html').innerHTML = html;
}

function updateStateHTML(data){
    let state = data.id.split('-')[1];
    let showJSON = reportCardShow[state]
    let statename = initialList[state]
   //  let html;
   let html = '<div style="width: 100%;"><button type="button" onclick="createWeightsHTML()" class="btn btn-primary" style="float: left;">Settings</button><br><br><br></div>'
   //  html+= '<p></p>'
    html += '<h2>Voting Rights Map: ' + statename + '</h2>'
    html += '<br>'
    html += '<p> <b>Grade</b>: ' + grades[statename] + ' (for selected aspects) </p>'
    html+= '<br>'
    html += '<hr size="2" width="90%" color="white"> '
    html += '<br>'
    let counter = 0
    Object.entries(showJSON).forEach(([k,v]) => { 
      if(k!="Grade") {
         html += '<h3><b>' + k + '</b></h3>'  
         Object.entries(v).forEach(([k2,v2]) => {  
            if (k2!='Total Score'){
                  // console.log('key')
                  // console.log(k)
                  // console.log('val')
                  // console.log(v)
                  html += '<p><b>' + k2 + '</b> ' + v2 + '</p>'
                  // html += '<p>' + k + ': ' + v + '/5 </p>'

            }
            counter += 1
         })
         html += '<br>'
      }
    })
   html+= '<br>'
   html += '<hr size="2" width="90%" color="white"> '
   html += '<br>'
   html += '<h3><b>' + 'Take Action!' + '</b></h3>' 
   html += '<a href="http://www.votewell.net/state.htm" style="color: white; text-decoration: underline;">'
   html += '<p>' + 'Get connected with organizations making a difference!' + '<p></a>' 
   html += '<br>'
   document.getElementById('weights-html').innerHTML = html;
}

//CREATE CHART FUNCTION
am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

        // Create map instance
    chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_usaLow;

    // Set projection
    chart.projection = new am4maps.projections.AlbersUsa();

    // Create map polygon series
    polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    polygonSeries.imagesSettings = {
        "selectable": true
    }
    polygonSeries.listeners = [{
        "event": "clickMapObject",
        "method": function(ev) {
          alert('clicked on ' + ev.mapObject.title)
        }
    }
    ]

    //Set min/max fill color for each area
    polygonSeries.heatRules.push({
        property: "fill",
        target: polygonSeries.mapPolygons.template,
        max: am4core.color('#F5E7B5'),
        min: am4core.color('#432A2B')
    });

    // Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeries.useGeodata = true;

    // Set heatmap values for each state
    // console.log(createMapData())
    createMapData()
    // polygonSeries.data = [
    //   {
    //     id: "US-AL",
    //     value: 477474
    //   },
    //   {
    //     id: "US-AK",
    //     value: 626932
    //   },
    //   {
    //     id: "US-AZ",
    //     value: 5130632
    //   },
    //   {
    //     id: "US-AR",
    //     value: 2673400
    //   },
    //   {
    //     id: "US-CA",
    //     value: 33871648
    //   },
    //   {
    //     id: "US-CO",
    //     value: 4301261
    //   },
    //   {
    //     id: "US-CT",
    //     value: 3405565
    //   },
    //   {
    //     id: "US-DE",
    //     value: 783600
    //   },
    //   {
    //     id: "US-FL",
    //     value: 15982378
    //   },
    //   {
    //     id: "US-GA",
    //     value: 8186453
    //   },
    //   {
    //     id: "US-HI",
    //     value: 1211537
    //   },
    //   {
    //     id: "US-ID",
    //     value: 1293953
    //   },
    //   {
    //     id: "US-IL",
    //     value: 12419293
    //   },
    //   {
    //     id: "US-IN",
    //     value: 6080485
    //   },
    //   {
    //     id: "US-IA",
    //     value: 2926324
    //   },
    //   {
    //     id: "US-KS",
    //     value: 2688418
    //   },
    //   {
    //     id: "US-KY",
    //     value: 4041769
    //   },
    //   {
    //     id: "US-LA",
    //     value: 4468976
    //   },
    //   {
    //     id: "US-ME",
    //     value: 1274923
    //   },
    //   {
    //     id: "US-MD",
    //     value: 5296486
    //   },
    //   {
    //     id: "US-MA",
    //     value: 6349097
    //   },
    //   {
    //     id: "US-MI",
    //     value: 9938444
    //   },
    //   {
    //     id: "US-MN",
    //     value: 4919479
    //   },
    //   {
    //     id: "US-MS",
    //     value: 2844658
    //   },
    //   {
    //     id: "US-MO",
    //     value: 5595211
    //   },
    //   {
    //     id: "US-MT",
    //     value: 902195
    //   },
    //   {
    //     id: "US-NE",
    //     value: 1711263
    //   },
    //   {
    //     id: "US-NV",
    //     value: 1998257
    //   },
    //   {
    //     id: "US-NH",
    //     value: 1235786
    //   },
    //   {
    //     id: "US-NJ",
    //     value: 8414350
    //   },
    //   {
    //     id: "US-NM",
    //     value: 1819046
    //   },
    //   {
    //     id: "US-NY",
    //     value: 18976457
    //   },
    //   {
    //     id: "US-NC",
    //     value: 8049313
    //   },
    //   {
    //     id: "US-ND",
    //     value: 642200
    //   },
    //   {
    //     id: "US-OH",
    //     value: 11353140
    //   },
    //   {
    //     id: "US-OK",
    //     value: 3450654
    //   },
    //   {
    //     id: "US-OR",
    //     value: 3421399
    //   },
    //   {
    //     id: "US-PA",
    //     value: 12281054
    //   },
    //   {
    //     id: "US-RI",
    //     value: 1048319
    //   },
    //   {
    //     id: "US-SC",
    //     value: 4012012
    //   },
    //   {
    //     id: "US-SD",
    //     value: 754844
    //   },
    //   {
    //     id: "US-TN",
    //     value: 5689283
    //   },
    //   {
    //     id: "US-TX",
    //     value: 20851820
    //   },
    //   {
    //     id: "US-UT",
    //     value: 2233169
    //   },
    //   {
    //     id: "US-VT",
    //     value: 608827
    //   },
    //   {
    //     id: "US-VA",
    //     value: 7078515
    //   },
    //   {
    //     id: "US-WA",
    //     value: 5894121
    //   },
    //   {
    //     id: "US-WV",
    //     value: 1808344
    //   },
    //   {
    //     id: "US-WI",
    //     value: 5363675
    //   },
    //   {
    //     id: "US-WY",
    //     value: 493782
    //   }
    // ];

    // Set up heat legend
    let heatLegend = chart.createChild(am4maps.HeatLegend);
    heatLegend.series = polygonSeries;
    heatLegend.align = "right";
    heatLegend.valign = "bottom";
    heatLegend.width = am4core.percent(20);
    heatLegend.marginRight = am4core.percent(4);
    heatLegend.minValue = 0;
    heatLegend.maxValue = 40000000;

    // Set up custom heat map legend labels using axis ranges
    var minRange = heatLegend.valueAxis.axisRanges.create();
    minRange.value = heatLegend.minValue;
    minRange.label.text = "less fair";
    var maxRange = heatLegend.valueAxis.axisRanges.create();
    maxRange.value = heatLegend.maxValue;
    maxRange.label.text = "more fair";

    // Blank out internal heat legend value axis labels
    heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(labelText) {
        return "";
    });

    // Configure series tooltip
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {grade}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;
    polygonTemplate.clickable = true;
    polygonTemplate.events.on("hit", function(ev) {
        var data = ev.target.dataItem.dataContext;
        console.log(data)
        updateStateHTML(data)
    });
    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#3100F9");

}); // end am4core.ready()

//INITIALIZE THE WEIGHTS
createWeightsHTML()
