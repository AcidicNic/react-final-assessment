# [React Final Assessment](https://nicc.io/react-final-assessment)
[live version here](https://nicc.io/react-final-assessment)!

### what?

This react app takes in band data from `src/metal.json` and displays each band.

You can search bands by style or name.

You can like/dislike bands that have not split up.

### How to run locally

1. Clone this repo.
```bash
git clone https://github.com/AcidicNic/react-final-assessment.git && cd react-final-assessment
```

2. Install npm dependencies.
```bash
npm i
```

3. Run the app locally.
```bash
npm run start
```

4. Visit localhost:3000


### How to deploy to gh pages

1. Change `"homepage": "https://nicc.io/react-final-assessment"` in `package.json` to your github pages url.
```
"homepage": "https://your-github-username.github.io/your-repo-name"
```

2. Deploy to gh-pages branch of your repo
```bash
npm run deploy
```
