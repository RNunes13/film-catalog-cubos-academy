import { Movie } from 'entities/Movie/Movie'

interface IInformation {
  label: string;
  text: string;
  fallbackText?: () => string;
}

interface IMovieInformation {
  status: IInformation;
  language: IInformation;
  duration?: IInformation | null;
  budget?: IInformation | null;
  revenue?: IInformation | null;
  profit?: IInformation | null;
}

export const useMovieInformation = (movie: Movie): IMovieInformation => {
  const { budget: budgetValue = 0, revenue: revenueValue = 0 } = movie

  const status = getStatus(movie)
  const language = getLanguage(movie)
  const duration = getDuration(movie)
  const budget = getCurrencyValue('budget', budgetValue)
  const revenue = getCurrencyValue('revenue', revenueValue)
  const profit = getCurrencyValue('profit', revenueValue - budgetValue)

  return {
    status,
    language,
    duration,
    budget,
    revenue,
    profit: !!revenue ? profit : null,
  }
}

const getStatus = ({ status: movieStatus = '' }): IInformation => {
  const status = movieStatus.replace(/\s/g, '')

  return {
    label: 'situation',
    text: `status.${status[0].toLocaleLowerCase()}${status.slice(1)}`
  }
}

const getLanguage = ({ originalLanguage, spokenLanguages }: any): IInformation => {
  const language = spokenLanguages.find(({ iso6391 }: any) => iso6391 === originalLanguage)

  return {
    label: 'language',
    text: `language.${originalLanguage}`,
    fallbackText: () => language?.name || language?.englishName
  }
}

const getDuration = ({ runtime }: any): IInformation | null => {
  if (!runtime) return null

  const minutes = Math.floor(((runtime * 60) % 3600) / 60);
  const hours = Math.floor((runtime * 60) / 3600)

  return {
    label: 'duration',
    text: `${hours}h${minutes}min`
  }
}

const getCurrencyValue = (label: string, value: number): IInformation | null => {
  if (!value) return null

  return {
    label,
    text: formatCurrency(value)
  }
}

const formatCurrency = (n: number): string => n.toLocaleString('en-US', {
  currency: 'USD',
  style: 'currency',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})
