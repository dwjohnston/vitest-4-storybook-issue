Demonstrates the the presense of storybook breaks vitest `useFakeTimers` 

https://github.com/vitest-dev/vitest/issues/9487

## Instructions 

```
npm i 
```

```
npm run test
```

Observe that the test fails. 

```
rm -rf node_modules package-lock.json
```

```
npm i
```

Observe no warnings during npm i. 

(At time of writing, package lock will not change, and re running tests still reproduce the error). 

Remove `storybook` as a dependency from package.json

```
rm -rf node_modules package-lock.json
```

```
npm i
```

Observe that the test passes. 
