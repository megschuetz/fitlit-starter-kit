import { expect } from "chai";
import Activity from "../src/Activity";
import UserRepository from "../src/UserRepository";

describe("Activity", () => {
  let activityData;
  let activity;
  // let userRepo;
  // let userData;

  beforeEach(() => {
     activityData = [
      {"userID":1,"date":"2019/06/15","numSteps":3577,"minutesActive":140,"flightsOfStairs":16},
      {"userID":2,"date":"2019/06/15","numSteps":3456,"minutesActive":60,"flightsOfStairs":17},
      {"userID":3,"date":"2019/06/15","numSteps":6879,"minutesActive":90,"flightsOfStairs":15},   
      {"userID":1,"date":"2019/06/16","numSteps":6637,"minutesActive":175,"flightsOfStairs":36},
      {"userID":1,"date":"2019/06/17","numSteps":14329,"minutesActive":168,"flightsOfStairs":18},
      {"userID":1,"date":"2019/06/18","numSteps":4419,"minutesActive":165,"flightsOfStairs":33},
      {"userID":1,"date":"2019/06/19","numSteps":8429,"minutesActive":275,"flightsOfStairs":2},
      {"userID":1,"date":"2019/06/20","numSteps":14478,"minutesActive":140,"flightsOfStairs":12},
      {"userID":1,"date":"2019/06/21","numSteps":6760,"minutesActive":135,"flightsOfStairs":6},
      {"userID":1,"date":"2019/06/22","numSteps":10289,"minutesActive":119,"flightsOfStairs":6},
    ]
    activity = new Activity(activityData);
    // userRepo = new UserRepository(userData);
  });

  it('should be a instance of Activity', () => {
    expect(activity).to.be.an.instanceOf(Activity);
  });

  it("should be a function", function () {
    expect(Activity).to.be.a("function");
  });

  it("should return error message if user does not exist", function () {
    expect(activity.findUser(52)).to.equal("User does not exist");
  });

  it("should have a method that returns how many active minutes in a given day", function () {
    expect(activity.activeMinutesDay(1, "2019/06/15")).to.equal(140)
  });

  it("should have a method that lists number of flights for a week", function () {
    expect(activity.activityFlightsPast7Days(1)).to.deep.equal([
      36, 18, 33, 2,
      12,  6,  6
    ])
  });

  it('should calculate the average of a given unit of all users on a given day', () => {
    expect(activity.allUsersAverage("2019/06/15", "numSteps")).to.equal(4637)
    expect(activity.allUsersAverage("2019/06/15", "minutesActive")).to.equal(97)
    expect(activity.allUsersAverage("2019/06/15", "flightsOfStairs")).to.equal(16)
  });

  it('should calulate 7day average for mins active based on date', () => {
    expect(activity.weeklyAverageMinsActive(1, '2019/06/22')).to.equal(1177)
  });

});