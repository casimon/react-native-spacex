# SpaceX Challenge 🚀

This spaceX challenge uses:

- [x] React Native 0.60.5
- [x] React Navigation
- [x] TypeScript
- [x] Redux
- [x] Axios
- [x] Redux Axios Middleware
- [x] React Native Maps

## Install instructions

Open a terminal and cd to the root of the project and run:

```
yarn
```

Go to the ios folder and run:

```
pod install
```

You are ready to launch 🚀

## Test instructions

Go to the root of the project and run:

```
yarn test
```

## Run on Android Emulator

Ensure you have an emulator set up and running. Go to Android Virtual Device Manager and launch an AVD in emulator

In a terminal type:

```
adb devices
```

You should see something like:

```
List of devices attached
emulator-5554   device
```

Ensure you at the root of the project folder and run:

```
react-native run-android
```

## Run on iOS Simulator

Ensure you are at the root of the project folder and run:

```
react-native run-ios
```

## Caveats

- Map screen is only supported on iOS. Android requires a Goole Map account and additional config.
- Search is by mission name not by rocket name to show filtering
- Thumbnail placeholders have been used for launches with missing patches
- Unit Tests are basic snapshots. In a production app I'd use Enzyme.
