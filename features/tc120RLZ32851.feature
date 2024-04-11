@tc120RLZ32851feature
Feature: Verify the Help Icon Updated with latest styles in Dashboard Page

  RegSuite 1 tc120RLZ32851

  @tc120RLZ32851
  Scenario Outline: tc120RLZ32851 Verify the Help Icon Updated with latest styles in Dashboard Page
    Given User navigates to Playwright Dashboard page
    # When User enters a "<Username>" and "<Password>" in the login page and Click Login Button
    # Then Dashboard page has navigated
    # When Help Icon Present in TopNavbar with Question Mark Icon enrolled with Circle Icon with White background colour

    Examples:
      | Username                      | Password    |
      | MSuite49win10chrome_teacher04 | testing123$ |