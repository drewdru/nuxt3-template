import { enUS, createLocale } from "naive-ui"
import { ALL_LOCALES } from "./dateFnsAllLocales"

export const getNaiveUiLocale = (t: (text: string) => string, locale: string) =>
  createLocale(
    {
      global: {
        undo: t("globalUndo"),
        redo: t("globalRedo"),
        confirm: t("globalConfirm"),
        clear: t("globalClear"),
      },
      Popconfirm: {
        positiveText: t("PopconfirmPositiveText"),
        negativeText: t("PopconfirmNegativeText"),
      },
      Cascader: {
        placeholder: t("CascaderPlaceholder"),
        loading: t("CascaderLoading"),
        loadingRequiredMessage: label =>
          `${t("CascaderLoadingRequiredMessage1")} ${label}${t("CascaderLoadingRequiredMessage2")}`,
      },
      Time: {
        dateFormat: "yyyy-MM-dd",
        dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
      },
      DatePicker: {
        yearFormat: "yyyy",
        monthFormat: "MMM",
        dayFormat: "eeeeee",
        yearTypeFormat: "yyyy",
        monthTypeFormat: "yyyy-MM",
        dateFormat: "yyyy-MM-dd",
        dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
        quarterFormat: "yyyy-qqq",
        weekFormat: "RRRR-w",
        clear: t("DatePickerClear"),
        now: t("DatePickerNow"),
        confirm: t("DatePickerConfirm"),
        selectTime: t("DatePickerSelectTime"),
        selectDate: t("DatePickerSelectDate"),
        datePlaceholder: t("DatePickerDatePlaceholder"),
        datetimePlaceholder: t("DatePickerDatetimePlaceholder"),
        monthPlaceholder: t("DatePickerMonthPlaceholder"),
        yearPlaceholder: t("DatePickerYearPlaceholder"),
        quarterPlaceholder: t("DatePickerQuarterPlaceholder"),
        weekPlaceholder: t("DatePickerWeekPlaceholder"),
        startDatePlaceholder: t("DatePickerStartDatePlaceholder"),
        endDatePlaceholder: t("DatePickerEndDatePlaceholder"),
        startDatetimePlaceholder: t("DatePickerStartDatetimePlaceholder"),
        endDatetimePlaceholder: t("DatePickerEndDatetimePlaceholder"),
        startMonthPlaceholder: t("DatePickerStartMonthPlaceholder"),
        endMonthPlaceholder: t("DatePickerEndMonthPlaceholder"),
        monthBeforeYear: true,
        firstDayOfWeek: locale === "en" ? 6 : 0,
        today: t("DatePickerToday"),
      },
      DataTable: {
        checkTableAll: t("DataTableCheckTableAll"),
        uncheckTableAll: t("DataTableUncheckTableAll"),
        confirm: t("DataTableConfirm"),
        clear: t("DataTableClear"),
      },
      LegacyTransfer: {
        sourceTitle: t("LegacyTransferSourceTitle"),
        targetTitle: t("LegacyTransferTargetTitle"),
      },
      Transfer: {
        selectAll: t("TransferSelectAll"),
        unselectAll: t("TransferUnselectAll"),
        clearAll: t("TransferClearAll"),
        total: num => `${t("TransferTotal1")} ${num} ${t("TransferTotal2")}}`,
        selected: num =>
          `${t("TransferSelected1")}${num} ${t("TransferSelected2")}`,
      },
      Empty: {
        description: t("EmptyDescription"),
      },
      Select: {
        placeholder: t("SelectPlaceholder"),
      },
      TimePicker: {
        placeholder: t("TimePickerPlaceholder"),
        positiveText: t("TimePickerPositiveText"),
        negativeText: t("TimePickerNegativeText"),
        now: t("TimePickerNow"),
        clear: t("TimePickerClear"),
      },
      Pagination: {
        goto: t("PaginationGoto"),
        selectionSuffix: t("PaginationSelectionSuffix"),
      },
      DynamicTags: {
        add: t("DynamicTagsAdd"),
      },
      Log: {
        loading: t("LogLoading"),
      },
      Input: {
        placeholder: t("InputPlaceholder"),
      },
      InputNumber: {
        placeholder: t("InputNumberPlaceholder"),
      },
      DynamicInput: {
        create: t("DynamicInputCreate"),
      },
      ThemeEditor: {
        title: t("ThemeEditorTitle"),
        clearAllVars: t("ThemeEditorClearAllVars"),
        clearSearch: t("ThemeEditorClearSearch"),
        filterCompName: t("ThemeEditorFilterCompName"),
        filterVarName: t("ThemeEditorFilterVarName"),
        import: t("ThemeEditorImport"),
        export: t("ThemeEditorExport"),
        restore: t("ThemeEditorRestore"),
      },
      Image: {
        tipPrevious: t("ImageTipPrevious"),
        tipNext: t("ImageTipNext"),
        tipCounterclockwise: t("ImageTipCounterclockwise"),
        tipClockwise: t("ImageTipClockwise"),
        tipZoomOut: t("ImageTipZoomOut"),
        tipZoomIn: t("ImageTipZoomIn"),
        tipDownload: t("ImageTipDownload"),
        tipClose: t("ImageTipClose"),
        tipOriginalSize: t("ImageTipOriginalSize"),
      },
    },
    enUS,
  )

const getLocale = (locale: string) => {
  return ALL_LOCALES[locale] ?? ALL_LOCALES.en
}

export const getNaiveUiDateLocale = (locale: string) => ({
  name: "en-US",
  locale: getLocale(locale),
})
