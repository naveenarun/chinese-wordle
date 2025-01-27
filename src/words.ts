const defaultMessage = ' Using word of the day instead.'

export function getWordOfTheDay() {
  if (location.search) {
    try {
      const query = atob(location.search.slice(1))
      if (query.length !== 5) {
        alert(`Incorrect word length from encoded query. ${defaultMessage}`)
      } else {
        return query
      }
    } catch (e) {
      alert(`Malformed encoded word query. ${defaultMessage}`)
    }
  }

  const now = new Date()
  const start = new Date(2022, 0, 0)
  const diff = Number(now) - Number(start)
  let day = Math.floor(diff / (1000 * 60 * 60 * 24))
  while (day > answers.length) {
    day -= answers.length
  }
  return answers[day]
}

// copied from Wordle source
const answers = ['的', '一', '是', '不', '了', '在', '人', '有', '我', '他', '这', '个', '们', '中', '来', '上', '大', '为', '和', '国', '地', '到', '以', '说', '时']

const allowedGuesses = ['的', '一', '是', '不', '了', '在', '人', '有', '我', '他', '这', '个', '们', '中', '来', '上', '大', '为', '和', '国', '地', '到', '以', '说', '时']

export const allWords = [...answers, ...allowedGuesses]
