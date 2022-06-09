import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'census_learn_sql' })
export class People extends BaseEntity {
    @Column()
    public age: number;

    @Column({ name: 'class of worker' })
    public classOfWorker: string;

    @Column({ name: 'industry code' })
    public industryCode: string;

    @Column({ name: 'occupation code' })
    public occupationCode: string;

    @Column()
    public education: string;

    @Column({ name: 'wage per hour' })
    public wagePerHour: string;

    @Column({ name: 'last education' })
    public lastEducation: string;

    @Column({ name: 'marital status' })
    public maritalStatus: string;

    @Column({ name: 'major industry code' })
    public majorIndustryCode: string;

    @Column({ name: 'major occupation code' })
    public majorOccupationCode: string;

    @Column()
    public mace: string;

    @Column()
    public hispanice: string;

    @Column()
    public sex: string;

    @Column({ name: 'member of labor' })
    public memberOfLabor: string;

    @Column({ name: 'reason for unemployment' })
    public reasonForUnemployment: string;

    @Column()
    public fulltime: string;

    @Column({ name: 'capital gain' })
    public capitalGain: string;

    @Column({ name: 'capital loss' })
    public capitalLoss: string;

    @Column()
    public dividends: string;

    @Column({ name: 'income tax liability' })
    public incomeTaxLiability: string;

    @Column({ name: 'previous residence region' })
    public previousResidenceRegion: string;

    @Column({ name: 'previous residence state' })
    public previousResidenceState: string;

    @Column({ name: 'household-with-family' })
    public householdWithFamily: string;

    @Column({ name: 'household-simple' })
    public householdSimple: string;

    @Column()
    public weight: string;

    @Column({ name: 'msa-change' })
    public msaChange: string;

    @Column({ name: 'reg-change' })
    public regChange: string;

    @Column({ name: 'within-reg-change' })
    public withinRegChange: string;

    @Column({ name: 'lived-here' })
    public livedHere: string;

    // @Column({ name: 'migration prev res in dividends' })
    // public migrationPrevResInDividends: string;

    @Column({ name: 'num persons worked for employer' })
    public numPersonsWorkedForEmployer: string;

    @Column({ name: 'family members under 118' })
    public familyMembersUnder118: string;

    @Column({ name: 'father birth country' })
    public fatherBirthCountry: string;

    @Column({ name: 'mother birth country' })
    public motherBirthCountry: string;

    @Column({ name: 'birth country' })
    public birthCountry: string;

    @Column()
    public citizenship: string;

    @Column({ name: 'own business or self employed' })
    public ownBuisnessOrSelfEmployed: string;

    @Column({ name: "fill questionnaire for veteran's admin" })
    public fillQuestionnaireForVeteransAdmin: string;

    @Column({ name: 'veterans benefits' })
    public veteransBenefits: string;

    @Column({ name: 'weeks worked in year' })
    public weeksWorkedInYear: string;

    @Column()
    public year: string;

    @Column({ name: 'salary range' })
    public salaryRange: string;
}
