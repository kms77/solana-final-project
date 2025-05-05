<?php

namespace App\Http\Helpers;

use Carbon\Carbon;

class GithubHelper
{
    public static function computeReportData(array $commits): array
    {
        $reportData = [];

        // get the current date and the date of the last year
        $currentDate = Carbon::now()->endOfDay();
        $previousYear = Carbon::now()->subYear();

        // initialize all days in the range with 0 commits
        $dateRange = [];
        for ($date = $previousYear; $date->lte($currentDate); $date->addDay()) {
            $formattedDate = $date->format('d-m-Y');
            $dateRange[$formattedDate] = 0;
        }

        // process commits and count them by day
        foreach ($commits as $commit) {
            $commitDate = Carbon::parse($commit['commit']['author']['date'])->format('d-m-Y');
            if (isset($dateRange[$commitDate])) {
                $dateRange[$commitDate]++;
            }
        }

        // return the report data and total commits
        return $dateRange;
    }
}