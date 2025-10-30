# My Git Mastery Challenge Journey

## Student Information
- **Name:** Sai Manasa Nikhita Dasari
- **Student ID:** 23P31A0514  
- **Repository:** https://github.com/nikhitadasari26/git-solved-23P31A0514
- **Date Started:** October 29, 2025  
- **Date Completed:** October 30, 2025  

---

## Task Summary
Cloned the instructor's repository containing pre-built conflicts and successfully resolved all merge conflicts across multiple branches (`dev` and `conflict-simulator`) using proper Git workflows and commands.

---

## Commands Used

| Command         | Times Used | Purpose                                        |
|-----------------|:----------:|----------------------------------------------- |
| git clone       |     1      | Cloned instructor’s base repository            |
| git checkout    |    10+     | Switched between branches during merges/tests  |
| git branch      |    10+     | Viewed, created, and managed branches          |
| git merge       |     2      | Merged dev and conflict-simulator into main    |
| git add         |    20+     | Staged resolved conflicts and new files        |
| git commit      |    15+     | Saved progress, completed merges               |
| git push        |    12+     | Pushed changes to my repository                |
| git fetch       |     2      | Fetched updates from instructor                |
| git pull        |     3+     | Pulled changes from instructor                 |
| git stash       |     2      | Saved work-in-progress during branch switches  |
| git cherry-pick |     3+     | Transferred specific commits to main branch    |
| git rebase      |     1      | Rebased feature branches for clean history     |
| git reset       |     3      | Undid/tested various commit reverts/reset      |
| git revert      |     1      | Safely undid one pushed commit                 |
| git tag         |     2      | Marked release milestones and merge completions|
| git status      |    20+     | Verified everything before and during merges   |
| git log         |    10+     | Viewed history and commit graph                |
| git diff        |    5+      | Compared changes between branches              |

---

## Conflicts Resolved

### Merge 1: main + dev (6 files)

**1. config/app-config.yaml**  
- Issue: Production used port 8080, development used 3000  
- Resolution: Created unified config with environment-based settings  
- Strategy: Keep production as default, add development as optional  
- Difficulty: Medium  
- Time: 15 minutes  

**2. config/database-config.json**  
- Issue: Different database hosts and SSL settings  
- Resolution: Combined into one JSON with separate production and development profiles  
- Strategy: Support both environments dynamically  
- Difficulty: Medium  
- Time: 10 minutes  

**3. scripts/deploy.sh**  
- Issue: Different deployment strategies (production vs docker-compose)  
- Resolution: Added conditional logic using DEPLOY_ENV variable  
- Strategy: Unified both environments into one dynamic script  
- Difficulty: Hard  
- Time: 20 minutes  

**4. scripts/monitor.js**  
- Issue: Different monitoring intervals and log formats  
- Resolution: Added environment-based config object using process.env.NODE_ENV  
- Strategy: Unified and cleaned unnecessary logs  
- Difficulty: Medium  
- Time: 15 minutes  

**5. docs/architecture.md**  
- Issue: Different architectural documentation  
- Resolution: Merged both into a comprehensive structure with sections for production and development  
- Strategy: Combined both perspectives clearly  
- Difficulty: Easy  
- Time: 10 minutes  

**6. README.md**  
- Issue: Conflicting project descriptions and versioning  
- Resolution: Combined all features with clear environment sections  
- Strategy: Organized Production, Development, and Experimental separately  
- Difficulty: Easy  
- Time: 10 minutes  

---

### Merge 2: main + conflict-simulator (6 files)

**1. config/app-config.yaml**  
- Issue: Added new AI-related environment section  
- Resolution: Merged existing structure with new ai-testing environment  
- Strategy: Ensure backward compatibility  
- Difficulty: Medium  
- Time: 10 minutes  

**2. config/database-config.json**  
- Issue: Conflict between standard and experimental DB settings  
- Resolution: Added separate key for "ai_mode": true when testing  
- Strategy: Maintain structured profiles for all environments  
- Difficulty: Medium  
- Time: 10 minutes  

**3. scripts/deploy.sh**  
- Issue: Conflict between standard deployment and AI-enhanced setup  
- Resolution: Introduced flag --ai for experimental builds  
- Strategy: Extended the unified script from previous merge  
- Difficulty: Hard  
- Time: 20 minutes  

**4. scripts/monitor.js**  
- Issue: Additional AI-monitoring logic from simulator branch  
- Resolution: Integrated AI-based performance metrics under condition check  
- Strategy: Keep environment and AI logic modular  
- Difficulty: Medium  
- Time: 15 minutes  

**5. docs/architecture.md**  
- Issue: Simulator branch added AI workflow section  
- Resolution: Appended as a separate subsection under Future Enhancements  
- Strategy: Preserve chronological documentation clarity  
- Difficulty: Easy  
- Time: 10 minutes  

**6. README.md**  
- Issue: Overlapping sections from experimental build  
- Resolution: Merged AI features under a new Experimental Mode heading  
- Strategy: Keep readability and feature categorization  
- Difficulty: Easy  
- Time: 10 minutes  

---

## Most Challenging Parts

1. Understanding conflict markers: Initially confusing to differentiate between `<<<<<<<`, `=======`, and `>>>>>>>`. Learned that HEAD represents the current branch and the other label represents incoming changes.  
2. Merging complex scripts: Especially deploy.sh, which had completely different logic for production and AI builds.  
3. Testing after merging: Ensured code ran successfully after every merge resolution.  
4. Maintaining clean logs: Removed unnecessary logs and ensured consistent formatting across scripts.  

---

## Key Learnings

### Technical Skills
- Mastered merge conflict resolution  
- Learned rebase, cherry-pick, and reset differences  
- Gained experience in multi-branch merging  
- Practiced all major Git commands thoroughly  

### Best Practices
- Always read both versions of conflicting files  
- Use `git diff` and `git log` to understand context  
- Test merged code before committing  
- Write clear commit messages for every resolution  
- Regularly check `git status`  

### Workflow Insights
- Conflicts are not errors, just choices  
- Patience and reading both sides is key  
- Document every conflict resolution for clarity  
- Use `git reflog` as a recovery lifesaver  

---

## Reflection
This challenge made me realize that Git conflicts are a normal part of real teamwork. Each conflict helped me understand both versions of the code and the reasoning behind them.  

I now feel confident resolving merge conflicts, rebasing branches safely, and maintaining clean, functional repositories. This experience has improved not only my Git skills but also my confidence in collaborative development workflows.

---
