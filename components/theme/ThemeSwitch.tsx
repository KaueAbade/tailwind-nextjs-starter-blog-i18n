'use client'

import { useTranslation } from 'app/[locale]/i18n/client'
import type { LocaleTypes } from 'app/[locale]/i18n/settings'
import { useParams } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import { DarkModeSwitch } from './DarkModeSwitch'
import { Theme, useTheme } from './ThemeContext'

const ThemeSwitch = (): React.JSX.Element | null => {
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, 'common')
  const { theme, setTheme, mounted } = useTheme()
  const [darkModeChecked, setDarkModeChecked] = useState<boolean>(false)

  useEffect(() => {
    if (theme === Theme.SYSTEM) {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDarkModeChecked(isDarkMode)
    } else {
      setDarkModeChecked(theme === Theme.DARK)
    }
  }, [theme])

  useEffect(() => {
    if (theme === Theme.SYSTEM) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (e: MediaQueryListEvent) => {
        setDarkModeChecked(e.matches)
      }

      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme])

  const handleThemeChange = useCallback(
    (isChecked: boolean) => {
      setTheme(isChecked ? Theme.DARK : Theme.LIGHT)
    },
    [setTheme]
  )

  if (!mounted) return null

  return (
    <div className="mr-5">
      <DarkModeSwitch
        checked={darkModeChecked}
        onChange={handleThemeChange}
        size={24}
        aria-label={t('theme')}
      />
    </div>
  )
}

export default ThemeSwitch
