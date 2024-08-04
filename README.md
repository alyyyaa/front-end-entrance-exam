# Описание

Этот проект представляет собой веб-шаблон резюме, в котором пользователи могут настраивать свое резюме, редактируя текстовые элементы непосредственно на странице. Включена кнопка "Скачать", которая преобразует текущую версию резюме в PDF файл и инициирует загрузку на компьютер пользователя.

# Функциональные возможности

- Пользователи могут редактировать текстовые элементы на странице для настройки своего резюме.
- Все изменения, внесенные в текстовые элементы резюме, автоматически сохраняются.
- Кнопка "Скачать" преобразует резюме в PDF файл и скачивает его на компьютер пользователя.

# Реализация кнопки "Скачать"
- Кнопка "Скачать" использует библиотеку jsPDF для преобразования текущего состояния резюме на веб-странице в PDF файл.
- Фотографии преобразуются в формат base64 для корректного отображения в документе.

# Дальнейшиие улучшения

Корректно отображать шрифты в созданном PDF файле.
