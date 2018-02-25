Write-Host "Running AppVeyor deployment script" -ForegroundColor Yellow
Write-Host "Build version : $env:APPVEYOR_BUILD_VERSION"
Write-Host "Author        : $env:APPVEYOR_REPO_COMMIT_AUTHOR"
Write-Host "Branch        : $env:APPVEYOR_REPO_BRANCH"

# we only want to deploy if on the master branch
if ($env:APPVEYOR_REPO_BRANCH -notmatch "master") {
    Write-Host "Not deploying branch: $env:APPVEYOR_REPO_BRANCH - Exiting"
    exit;
}

firebase deploy --only functions --token 1/RhaFJsg4XQM3Cmnx8QHsvN2H1YzEQJyT_MNLgRGT0so
if ($lastexitcode -notmatch 0) {
    throw "Deployment of functions failed"
}

firebase deploy --only hosting --token 1/RhaFJsg4XQM3Cmnx8QHsvN2H1YzEQJyT_MNLgRGT0so
if ($lastexitcode -notmatch 0) {
    throw "Deployment of website failed"
}

Write-Host "Deployment complete"
