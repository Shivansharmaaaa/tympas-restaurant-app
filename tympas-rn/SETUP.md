# Setup Instructions

## Fix macOS File Limit Issue

The "EMFILE: too many open files" error occurs because macOS has a low default file limit. Here's how to fix it:

### Temporary Fix (for current session):
```bash
ulimit -n 10240
```

### Permanent Fix:

1. **Check current limit:**
   ```bash
   ulimit -n
   ```

2. **Add to your shell config file:**
   
   For Zsh (default on macOS):
   ```bash
   echo "ulimit -n 10240" >> ~/.zshrc
   source ~/.zshrc
   ```
   
   For Bash:
   ```bash
   echo "ulimit -n 10240" >> ~/.bash_profile
   source ~/.bash_profile
   ```

3. **Or create a system-wide limit (requires admin):**
   ```bash
   sudo launchctl limit maxfiles 10240 10240
   ```

### Alternative: Install Watchman (Recommended)

Watchman is a better file watcher for React Native:

```bash
# Install via Homebrew
brew install watchman

# Then start Expo normally
npx expo start
```

## Start the App

After fixing the file limit:

```bash
cd tympas-rn
ulimit -n 10240  # If not in your shell config
npx expo start --clear
```

Or use the startup script:
```bash
./start.sh
```


