import {makeAutoObservable} from 'mobx'
//import { ADMIN_ROUTE, APARTMENT_ROUTE, CUSTOMER_ROUTE, SHOP_ROUTE, STORE_ROUTE, TRADES_ROUTE, VALUATION_ROUTE } from '../utils/consts'

export default class DeviceStore {
    constructor () {
        this._types = [
            {id: 1, name: 'Квартиры', link: "APARTMENT_ROUTE"},
            {id: 2, name: 'Сделки', link: "TRADES_ROUTE"},
            {id: 3, name: 'Расчеты', link: "VALUATION_ROUTE"},
            {id: 4, name: 'Склад', link: "STORE_ROUTE"},
            {id: 5, name: 'Клиенты', link: "CUSTOMER_ROUTE"}
        ]
        this._brands = [
            {id: 1, name: 'apple'},
            {id: 2, name: 'lenovo'}
        ]
        this._apartments = []
        this._statuses = []

        this._selectedStatus={}
        this._selectedBrand={}
        this._selectedType={}
        this._selectedApartment={}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setApartments(apartments) {
        this._apartments = apartments
    }
    setStatuses(statuses) {
        this._statuses= statuses
    }


    setSelectedType(type) {
        this._setSelectedType = type
    }
    setSelectedBrand(brand) {
        this._setSelectedType = brand
    }
    setSelectedApartment(apartment) {
        this._setSelectedType = apartment
    }
    setSelectedStatus(status) {
        this._selectedStatus = status
    }

    get types(){
        return this._types
    }
    get brands() {
        return this._brands 
    }
    get apartments() {
        return this._apartments
    }
    get statuses() {
        return this._statuses
    }

    get selectedApartment() {
        return this._electedApartment
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedStatus() {
        return this.selectedStatus
    }
}