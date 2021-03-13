$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MovieSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Търсене на филм",
  "description": "",
  "id": "търсене-на-филм",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Търсене на филм без резултат",
  "description": "",
  "id": "търсене-на-филм;търсене-на-филм-без-резултат",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Потребителя отваря търсачката за филми",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Отваря се страницата за търсене на филми",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда име на филм : \"asd\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Въвежда жанр : \"horor\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натиска бутона за търсене",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Връша че няма филм с тези критерии",
  "keyword": "Then "
});
formatter.match({
  "location": "MovieSearchSteps.openLoginFilm()"
});
formatter.result({
  "duration": 202992100,
  "status": "passed"
});
formatter.match({
  "location": "MovieSearchSteps.openFilmSearch()"
});
formatter.result({
  "duration": 90900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asd",
      "offset": 23
    }
  ],
  "location": "MovieSearchSteps.enterFilmName(String)"
});
formatter.result({
  "duration": 2298400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "horor",
      "offset": 16
    }
  ],
  "location": "MovieSearchSteps.enterGenre(String)"
});
formatter.result({
  "duration": 258900,
  "status": "passed"
});
formatter.match({
  "location": "MovieSearchSteps.clickSearchButton()"
});
formatter.result({
  "duration": 46400,
  "status": "passed"
});
formatter.match({
  "location": "MovieSearchSteps.noFilmMessage(String)"
});
formatter.result({
  "duration": 890100,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027uni.pl.fmi.MovieSearchSteps.noFilmMessage(String) in file:/D:/%d0%a3%d0%bd%d0%b8/%d0%90%d0%bd%d0%b0%d0%bb%d0%b8%d0%b7%20%d0%bd%d0%b0%20%d0%b8%d0%b7%d0%b8%d1%81%d0%ba%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f%d1%82%d0%b0/Veysel-Ruskov-1801321053-main/cucmber-movies/target/test-classes/\u0027 with pattern [^Връша че няма филм с тези критерии$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Then Връша че няма филм с тези критерии\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "Търсене на филм с резултат",
  "description": "",
  "id": "търсене-на-филм;търсене-на-филм-с-резултат",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Потребителя отваря търсачката за филми",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Отваря се страницата за търсене на филми",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Въвежда име на филм : \"test\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Въвежда жанр : \"action\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Натиска бутона за търсене",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Връща филми с тези критерии",
  "keyword": "Then "
});
formatter.match({
  "location": "MovieSearchSteps.openLoginFilm()"
});
formatter.result({
  "duration": 102800,
  "status": "passed"
});
formatter.match({
  "location": "MovieSearchSteps.openFilmSearch()"
});
formatter.result({
  "duration": 74600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 23
    }
  ],
  "location": "MovieSearchSteps.enterFilmName(String)"
});
formatter.result({
  "duration": 161500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "action",
      "offset": 16
    }
  ],
  "location": "MovieSearchSteps.enterGenre(String)"
});
formatter.result({
  "duration": 131800,
  "status": "passed"
});
formatter.match({
  "location": "MovieSearchSteps.clickSearchButton()"
});
formatter.result({
  "duration": 26000,
  "status": "passed"
});
formatter.match({
  "location": "MovieSearchSteps.foundFilmMessage(String)"
});
formatter.result({
  "duration": 592400,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027uni.pl.fmi.MovieSearchSteps.foundFilmMessage(String) in file:/D:/%d0%a3%d0%bd%d0%b8/%d0%90%d0%bd%d0%b0%d0%bb%d0%b8%d0%b7%20%d0%bd%d0%b0%20%d0%b8%d0%b7%d0%b8%d1%81%d0%ba%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f%d1%82%d0%b0/Veysel-Ruskov-1801321053-main/cucmber-movies/target/test-classes/\u0027 with pattern [^Връща филми с тези критерии$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Then Връща филми с тези критерии\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 21,
  "name": "Търсене на филм без критерии",
  "description": "",
  "id": "търсене-на-филм;търсене-на-филм-без-критерии",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "Потребителя отваря търсачката за филми",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Отваря се страницата за търсене на филми",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Въвежда име на филм : \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Въвежда жанр : \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Натиска бутона за търсене",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Връща филми всички филми",
  "keyword": "Then "
});
formatter.match({
  "location": "MovieSearchSteps.openLoginFilm()"
});
formatter.result({
  "duration": 105600,
  "status": "passed"
});
formatter.match({
  "location": "MovieSearchSteps.openFilmSearch()"
});
formatter.result({
  "duration": 80500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    }
  ],
  "location": "MovieSearchSteps.enterFilmName(String)"
});
formatter.result({
  "duration": 109600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    }
  ],
  "location": "MovieSearchSteps.enterGenre(String)"
});
formatter.result({
  "duration": 127600,
  "status": "passed"
});
formatter.match({
  "location": "MovieSearchSteps.clickSearchButton()"
});
formatter.result({
  "duration": 30800,
  "status": "passed"
});
formatter.match({
  "location": "MovieSearchSteps.allFilmMessage(String)"
});
formatter.result({
  "duration": 665500,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027uni.pl.fmi.MovieSearchSteps.allFilmMessage(String) in file:/D:/%d0%a3%d0%bd%d0%b8/%d0%90%d0%bd%d0%b0%d0%bb%d0%b8%d0%b7%20%d0%bd%d0%b0%20%d0%b8%d0%b7%d0%b8%d1%81%d0%ba%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f%d1%82%d0%b0/Veysel-Ruskov-1801321053-main/cucmber-movies/target/test-classes/\u0027 with pattern [^Връща филми всички филми$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Then Връща филми всички филми\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 29,
  "name": "Търсене на сериал без критерии",
  "description": "",
  "id": "търсене-на-филм;търсене-на-сериал-без-критерии",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "Потребителя отваря търсачката за сериал",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "Отваря се страницата за търсене на сериал",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Въвежда име на сериал : \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Въвежда жанр на сериал: \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Натиска бутона за търсене",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Връща филми всички сериал",
  "keyword": "Then "
});
formatter.match({
  "location": "MovieSearchSteps.потребителя_отваря_търсачката_за_сериал()"
});
formatter.result({
  "duration": 119200,
  "status": "passed"
});
formatter.match({
  "location": "MovieSearchSteps.отваря_се_страницата_за_търсене_на_сериал()"
});
formatter.result({
  "duration": 99100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    }
  ],
  "location": "MovieSearchSteps.въвежда_име_на_сериал(String)"
});
formatter.result({
  "duration": 152200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    }
  ],
  "location": "MovieSearchSteps.въвежда_жанр_на_сериал(String)"
});
formatter.result({
  "duration": 152400,
  "status": "passed"
});
formatter.match({
  "location": "MovieSearchSteps.clickSearchButton()"
});
formatter.result({
  "duration": 29400,
  "status": "passed"
});
formatter.match({
  "location": "MovieSearchSteps.връща_филми_всички_сериал(String)"
});
formatter.result({
  "duration": 486500,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027uni.pl.fmi.MovieSearchSteps.връща_филми_всички_сериал(String) in file:/D:/%d0%a3%d0%bd%d0%b8/%d0%90%d0%bd%d0%b0%d0%bb%d0%b8%d0%b7%20%d0%bd%d0%b0%20%d0%b8%d0%b7%d0%b8%d1%81%d0%ba%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f%d1%82%d0%b0/Veysel-Ruskov-1801321053-main/cucmber-movies/target/test-classes/\u0027 with pattern [^Връща филми всички сериал$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Then Връща филми всички сериал\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 37,
  "name": "Търсене на сериал с резултат",
  "description": "",
  "id": "търсене-на-филм;търсене-на-сериал-с-резултат",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "Потребителя отваря търсачката за сериал",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Отваря се страницата за търсене на сериал",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Въвежда име на сериал : \"test1\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Въвежда жанр на сериал: \"action2\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Натиска бутона за търсене",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Връща сериал с тези критерии",
  "keyword": "Then "
});
formatter.match({
  "location": "MovieSearchSteps.потребителя_отваря_търсачката_за_сериал()"
});
formatter.result({
  "duration": 100700,
  "status": "passed"
});
formatter.match({
  "location": "MovieSearchSteps.отваря_се_страницата_за_търсене_на_сериал()"
});
formatter.result({
  "duration": 61900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1",
      "offset": 25
    }
  ],
  "location": "MovieSearchSteps.въвежда_име_на_сериал(String)"
});
formatter.result({
  "duration": 128600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "action2",
      "offset": 25
    }
  ],
  "location": "MovieSearchSteps.въвежда_жанр_на_сериал(String)"
});
formatter.result({
  "duration": 113600,
  "status": "passed"
});
formatter.match({
  "location": "MovieSearchSteps.clickSearchButton()"
});
formatter.result({
  "duration": 24400,
  "status": "passed"
});
formatter.match({
  "location": "MovieSearchSteps.връща_сериал_с_тези_критерии(String)"
});
formatter.result({
  "duration": 442500,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027uni.pl.fmi.MovieSearchSteps.връща_сериал_с_тези_критерии(String) in file:/D:/%d0%a3%d0%bd%d0%b8/%d0%90%d0%bd%d0%b0%d0%bb%d0%b8%d0%b7%20%d0%bd%d0%b0%20%d0%b8%d0%b7%d0%b8%d1%81%d0%ba%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f%d1%82%d0%b0/Veysel-Ruskov-1801321053-main/cucmber-movies/target/test-classes/\u0027 with pattern [^Връща сериал с тези критерии$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Then Връща сериал с тези критерии\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 45,
  "name": "Търсене на сериал без резултат",
  "description": "",
  "id": "търсене-на-филм;търсене-на-сериал-без-резултат",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "Потребителя отваря търсачката за сериал",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "Отваря се страницата за търсене на сериал",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Въвежда име на сериал : \"asd2\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "Въвежда жанр на сериал: \"horor2\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Натиска бутона за търсене",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Връша че няма сериал с тези критерии",
  "keyword": "Then "
});
formatter.match({
  "location": "MovieSearchSteps.потребителя_отваря_търсачката_за_сериал()"
});
formatter.result({
  "duration": 99500,
  "status": "passed"
});
formatter.match({
  "location": "MovieSearchSteps.отваря_се_страницата_за_търсене_на_сериал()"
});
formatter.result({
  "duration": 59200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asd2",
      "offset": 25
    }
  ],
  "location": "MovieSearchSteps.въвежда_име_на_сериал(String)"
});
formatter.result({
  "duration": 129000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "horor2",
      "offset": 25
    }
  ],
  "location": "MovieSearchSteps.въвежда_жанр_на_сериал(String)"
});
formatter.result({
  "duration": 103300,
  "status": "passed"
});
formatter.match({
  "location": "MovieSearchSteps.clickSearchButton()"
});
formatter.result({
  "duration": 38500,
  "status": "passed"
});
formatter.match({
  "location": "MovieSearchSteps.връша_че_няма_сериал_с_тези_критерии(String)"
});
formatter.result({
  "duration": 623700,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027uni.pl.fmi.MovieSearchSteps.връша_че_няма_сериал_с_тези_критерии(String) in file:/D:/%d0%a3%d0%bd%d0%b8/%d0%90%d0%bd%d0%b0%d0%bb%d0%b8%d0%b7%20%d0%bd%d0%b0%20%d0%b8%d0%b7%d0%b8%d1%81%d0%ba%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f%d1%82%d0%b0/Veysel-Ruskov-1801321053-main/cucmber-movies/target/test-classes/\u0027 with pattern [^Връша че няма сериал с тези критерии$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Then Връша че няма сериал с тези критерии\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Вход в системата",
  "description": "",
  "id": "вход-в-системата",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Вход в системата с валидни потребителски данни",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-с-валидни-потребителски-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Портебителя отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Въвежда потребителско име \"Ivan\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въвежда парола \"Pass123\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщение \"ОК\".",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 11,
  "name": "Вход в системата с невалидни потребителски данни",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-с-невалидни-потребителски-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "Портебителя отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Въвежда потребителско име \"Ivan123\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Въвежда парола \"123Pass123\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Натиска бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Вижда съобщение \"Потребител с тези данни не съществува!\".",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 18,
  "name": "Вход в системата без парола",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-без-парола",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "Портебителя отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Въвежда потребителско име \"Ivan123\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Натиска бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Вижда съобщение \"Моля въведете парола!\".",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 24,
  "name": "Вход в системата без потребителски данни",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-без-потребителски-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "Портебителя отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Натиска бутона за вход в системата",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Вижда съобщение \"Моля въведете потребителско име и парола!\".",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 29,
  "name": "Вход в системата потребителско име",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-потребителско-име",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "Портебителя отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "Въвежда парола \"123Pass123\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Натиска бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Вижда съобщение \"Моля въведете потребителско име!\".",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 2,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Потребителя отваря екрана за регистрация",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Въведе потребителско име\"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въведе парола\"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въведе втора парола\"\u003cpassword2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въведе електронна поща\"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натисне върйу бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение \"\u003cexpectedMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "password2",
        "email",
        "expectedMessage"
      ],
      "line": 14,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;1"
    },
    {
      "cells": [
        "user1",
        "password",
        "password",
        "test@test.com",
        "Успешно се регистрирахте"
      ],
      "line": 15,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;2"
    },
    {
      "cells": [
        "user2",
        "password",
        "password",
        "test@test.com",
        "Потребителското име е заето"
      ],
      "line": 16,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;3"
    },
    {
      "cells": [
        "",
        "password",
        "password",
        "test@test.com",
        "Въведете потребителско име"
      ],
      "line": 17,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;4"
    },
    {
      "cells": [
        "user1",
        "password",
        "password",
        "",
        "Въведете електронна поща"
      ],
      "line": 18,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;5"
    },
    {
      "cells": [
        "user1",
        "password",
        "password123",
        "test@test.com",
        "Въведете еднакви пароли"
      ],
      "line": 19,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;6"
    },
    {
      "cells": [
        "user1",
        "password",
        "",
        "test@test.com",
        "Потвърдете паролата"
      ],
      "line": 20,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Потребителя отваря екрана за регистрация",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Въведе потребителско име\"user1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въведе парола\"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въведе втора парола\"password\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въведе електронна поща\"test@test.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натисне върйу бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение \"Успешно се регистрирахте\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 16,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Потребителя отваря екрана за регистрация",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Въведе потребителско име\"user2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въведе парола\"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въведе втора парола\"password\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въведе електронна поща\"test@test.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натисне върйу бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение \"Потребителското име е заето\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 17,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Потребителя отваря екрана за регистрация",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Въведе потребителско име\"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въведе парола\"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въведе втора парола\"password\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въведе електронна поща\"test@test.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натисне върйу бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение \"Въведете потребителско име\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 18,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Потребителя отваря екрана за регистрация",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Въведе потребителско име\"user1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въведе парола\"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въведе втора парола\"password\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въведе електронна поща\"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натисне върйу бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение \"Въведете електронна поща\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 19,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Потребителя отваря екрана за регистрация",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Въведе потребителско име\"user1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въведе парола\"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въведе втора парола\"password123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въведе електронна поща\"test@test.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натисне върйу бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение \"Въведете еднакви пароли\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 20,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Потребителя отваря екрана за регистрация",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Въведе потребителско име\"user1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въведе парола\"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въведе втора парола\"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въведе електронна поща\"test@test.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натисне върйу бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение \"Потвърдете паролата\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});