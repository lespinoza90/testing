const expect= require('chai').expect;
const CalculatorPage = require('../../calculator.pageobjects');
const LotContent= require ('../../helpers/testdata').LotContent;
const LotContentValues= require ('../../helpers/testdata').LotContentValues;
describe('Parking Calculator page Calculate cost',()=>{
    let TotalCost;
    let result;
    ///
    //Testing!!!!
    //TODO: TO CREATE A FUNCTION TO RANDOM CHOOSE DATES AND HOURS
    it('should select Short-Term Parking PM time',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        CalculatorPage.EntryTimePMRadioButton.click();
        CalculatorPage.ExitTimePMRadioButton.click();
        CalculatorPage.EntryTimeTextBox.setValue('13:00');
        CalculatorPage.ExitTimeTextBox.setValue('14:00');
        CalculatorPage.EntryDate.setValue('01/01/2020');
        CalculatorPage.ExitDate.setValue('01/01/2020');
        CalculatorPage.CalculateButton.click();
        TotalCost=CalculatorPage.CalculateCost.getText();
        result= TotalCost.replace(/[!@#$%^&*' ']/g, "");
        expect(result).to.equal('2.00');
    });

    it('should select Economy Parking PM time',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        CalculatorPage.LotOptionSelector.selectByIndex(1);
        CalculatorPage.EntryTimePMRadioButton.click();
        CalculatorPage.ExitTimePMRadioButton.click();
        CalculatorPage.EntryTimeTextBox.setValue('15:00');
        CalculatorPage.ExitTimeTextBox.setValue('16:00');
        CalculatorPage.EntryDate.setValue('01/02/2020');
        CalculatorPage.ExitDate.setValue('01/02/2020');
        CalculatorPage.CalculateButton.click();
        TotalCost=CalculatorPage.CalculateCost.getText();
        result= TotalCost.replace(/[!@#$%^&*' ']/g, "");
        expect(result).to.equal('4.00');
    });
    it('should select Long-Term Surface Parking PM time',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        CalculatorPage.LotOptionSelector.selectByIndex(2);
        CalculatorPage.EntryTimePMRadioButton.click();
        CalculatorPage.ExitTimePMRadioButton.click();
        CalculatorPage.EntryTimeTextBox.setValue('17:00');
        CalculatorPage.ExitTimeTextBox.setValue('18:00');
        CalculatorPage.EntryDate.setValue('01/03/2020');
        CalculatorPage.ExitDate.setValue('01/03/2020');
        CalculatorPage.CalculateButton.click();
        TotalCost=CalculatorPage.CalculateCost.getText();
        result= TotalCost.replace(/[!@#$%^&*' ']/g, "");
        expect(result).to.equal('2.00');
    });
    it('should select Long-Term Garage Parking PM time',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        CalculatorPage.LotOptionSelector.selectByIndex(3);
        CalculatorPage.EntryTimePMRadioButton.click();
        CalculatorPage.ExitTimePMRadioButton.click();
        CalculatorPage.EntryTimeTextBox.setValue('19:00');
        CalculatorPage.ExitTimeTextBox.setValue('20:00');
        CalculatorPage.EntryDate.setValue('01/04/2020');
        CalculatorPage.ExitDate.setValue('01/04/2020');
        CalculatorPage.CalculateButton.click();
        TotalCost=CalculatorPage.CalculateCost.getText();
        result= TotalCost.replace(/[!@#$%^&*' ']/g, "");
        expect(result).to.equal('2.00');
    });
    it('should select Valet Parking PM time',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        CalculatorPage.LotOptionSelector.selectByIndex(4);
        CalculatorPage.EntryTimePMRadioButton.click();
        CalculatorPage.ExitTimePMRadioButton.click();
        CalculatorPage.EntryTimeTextBox.setValue('21:00');
        CalculatorPage.ExitTimeTextBox.setValue('22:00');
        CalculatorPage.EntryDate.setValue('01/05/2020');
        CalculatorPage.ExitDate.setValue('01/05/2020');
        CalculatorPage.CalculateButton.click();
        TotalCost=CalculatorPage.CalculateCost.getText();
        result= TotalCost.replace(/[!@#$%^&*' ']/g, "");
        expect(result).to.equal('12.00');
    });
});