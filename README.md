# BUILD
## increment app versions for both ios and android.
## tag git with version numbers
    e.g. git tag -a v1.0.1 -m "version 1.0.0"
## Build for android: run the below commands to get outputs, outputs will be on ./android
    cd android
#### to get .aab
    ./gradlew bundleRelease && cp app/build/outputs/bundle/release/app-release.aab ./app-release.aab
#### to get .apk
    ./gradlew assembleRelease && cp app/build/outputs/apk/release/app-release.apk ./app-release.apk
#### to clean after build
    ./gradlew clean
## Build for ios: (need certs!)
    open workspace in XCode
    Product -> Build after build completed
    Product -> Archive
