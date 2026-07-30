# Daily Logs

Denne mappe bruges til at føre daglige logfiler for UniversityOS.

## Struktur
- `daily-logs/` – logfiler og billeder
- `daily-logs/billeder/` – screenshots og billeder fra dagen
- `daily-logs/daily-log-template.md` – skabelon til nye logfiler
- `daily-logs/generate-daily-log.js` – script til automatisk at oprette en ny logfil

## Sådan bruges det
1. Kør scriptet:
   `node daily-logs/generate-daily-log.js`
2. Rediger den nye fil i mappen `daily-logs/`
3. Gem screenshots i `daily-logs/billeder/`

## AI-prompt til slutningen af en session
Brug denne prompt i ChatGPT eller Copilot, når du vil lave dagens log automatisk:

"Jeg arbejder på UniversityOS. Opret en ny daglig log-fil i mappen daily-logs med navnet YYYY-MM-DD-dag-X.md. Basér indholdet på det, vi har lavet i dag. Brug strukturen fra daily-log-template.md. Inkluder korte punkter under HVAD VI GJORDE, SCREENSHOTS, STATUS, PLAN NÆSTE GANG og NOTER. Referér til billeder i daily-logs/billeder/."
