const { execSync } = require('child_process')

const stdout = execSync('pnpm ls -r --depth -1 --json')
const scopes = JSON.parse(stdout.toString()).map(pkg => pkg.name)

scopes.push('@kinodom/apps')

module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: ['feat', 'fix', 'refactor', 'docs', 'style', 'ci', 'test', 'perf'],
  maxMessageLength: 200,
  minMessageLength: 1,
  questions: ['type', 'scope', 'subject'],
  scopes,
  types: {
    ci: {
      description: 'CI related changes',
      emoji: '👷',
      value: 'ci'
    },
    docs: {
      description: 'Documentation only changes',
      emoji: '✏️',
      value: 'docs'
    },
    feat: {
      description: 'A new feature',
      emoji: '✨',
      value: 'feat'
    },
    fix: {
      description: 'A bug fix',
      emoji: '🐛',
      value: 'fix'
    },
    perf: {
      description: 'A code change that improves performance',
      emoji: '⚡️',
      value: 'perf'
    },
    refactor: {
      description: 'A code change that neither fixes a bug or adds a feature',
      emoji: '🔨',
      value: 'refactor'
    },
    style: {
      description: 'Markup, white-space, formatting, missing semi-colons...',
      emoji: '💄',
      value: 'style'
    },
    test: {
      description: 'Adding missing tests',
      emoji: '✅',
      value: 'test'
    }
  }
}
