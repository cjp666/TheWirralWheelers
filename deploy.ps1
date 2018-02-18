Write-Host 'Running AppVeyor deployment script' -ForegroundColor Yellow
Write-Host "Build version : $env:APPVEYOR_BUILD_VERSION"
Write-Host "Author        : $env:APPVEYOR_REPO_COMMIT_AUTHOR"
Write-Host "Branch        : $env:APPVEYOR_REPO_BRANCH"
Write-Host $env:CODECOV_TOKEN
