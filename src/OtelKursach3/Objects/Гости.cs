﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.OtelKursach3
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Гости.
    /// </summary>
    // *** Start programmer edit section *** (Гости CustomAttributes)

    // *** End programmer edit section *** (Гости CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ГостиE", new string[] {
            "КодГостя as \'Код гостя\'",
            "Имя as \'Имя\'",
            "Фамилия as \'Фамилия\'",
            "Отчество as \'Отчество\'",
            "Комментарий as \'Комментарий\'"})]
    public class Гости : ICSSoft.STORMNET.DataObject
    {
        
        private string fИмя;
        
        private int fКодГостя;
        
        private string fОтчество;
        
        private string fФамилия;
        
        private string fКомментарий;
        
        private IIS.OtelKursach3.Доступ fДоступ;
        
        // *** Start programmer edit section *** (Гости CustomMembers)

        // *** End programmer edit section *** (Гости CustomMembers)

        
        /// <summary>
        /// Имя.
        /// </summary>
        // *** Start programmer edit section *** (Гости.Имя CustomAttributes)

        // *** End programmer edit section *** (Гости.Имя CustomAttributes)
        [StrLen(255)]
        public virtual string Имя
        {
            get
            {
                // *** Start programmer edit section *** (Гости.Имя Get start)

                // *** End programmer edit section *** (Гости.Имя Get start)
                string result = this.fИмя;
                // *** Start programmer edit section *** (Гости.Имя Get end)

                // *** End programmer edit section *** (Гости.Имя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Гости.Имя Set start)

                // *** End programmer edit section *** (Гости.Имя Set start)
                this.fИмя = value;
                // *** Start programmer edit section *** (Гости.Имя Set end)

                // *** End programmer edit section *** (Гости.Имя Set end)
            }
        }
        
        /// <summary>
        /// КодГостя.
        /// </summary>
        // *** Start programmer edit section *** (Гости.КодГостя CustomAttributes)

        // *** End programmer edit section *** (Гости.КодГостя CustomAttributes)
        public virtual int КодГостя
        {
            get
            {
                // *** Start programmer edit section *** (Гости.КодГостя Get start)

                // *** End programmer edit section *** (Гости.КодГостя Get start)
                int result = this.fКодГостя;
                // *** Start programmer edit section *** (Гости.КодГостя Get end)

                // *** End programmer edit section *** (Гости.КодГостя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Гости.КодГостя Set start)

                // *** End programmer edit section *** (Гости.КодГостя Set start)
                this.fКодГостя = value;
                // *** Start programmer edit section *** (Гости.КодГостя Set end)

                // *** End programmer edit section *** (Гости.КодГостя Set end)
            }
        }
        
        /// <summary>
        /// Комментарий.
        /// </summary>
        // *** Start programmer edit section *** (Гости.Комментарий CustomAttributes)

        // *** End programmer edit section *** (Гости.Комментарий CustomAttributes)
        [StrLen(255)]
        public virtual string Комментарий
        {
            get
            {
                // *** Start programmer edit section *** (Гости.Комментарий Get start)

                // *** End programmer edit section *** (Гости.Комментарий Get start)
                string result = this.fКомментарий;
                // *** Start programmer edit section *** (Гости.Комментарий Get end)

                // *** End programmer edit section *** (Гости.Комментарий Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Гости.Комментарий Set start)

                // *** End programmer edit section *** (Гости.Комментарий Set start)
                this.fКомментарий = value;
                // *** Start programmer edit section *** (Гости.Комментарий Set end)

                // *** End programmer edit section *** (Гости.Комментарий Set end)
            }
        }
        
        /// <summary>
        /// Отчество.
        /// </summary>
        // *** Start programmer edit section *** (Гости.Отчество CustomAttributes)

        // *** End programmer edit section *** (Гости.Отчество CustomAttributes)
        [StrLen(255)]
        public virtual string Отчество
        {
            get
            {
                // *** Start programmer edit section *** (Гости.Отчество Get start)

                // *** End programmer edit section *** (Гости.Отчество Get start)
                string result = this.fОтчество;
                // *** Start programmer edit section *** (Гости.Отчество Get end)

                // *** End programmer edit section *** (Гости.Отчество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Гости.Отчество Set start)

                // *** End programmer edit section *** (Гости.Отчество Set start)
                this.fОтчество = value;
                // *** Start programmer edit section *** (Гости.Отчество Set end)

                // *** End programmer edit section *** (Гости.Отчество Set end)
            }
        }
        
        /// <summary>
        /// Фамилия.
        /// </summary>
        // *** Start programmer edit section *** (Гости.Фамилия CustomAttributes)

        // *** End programmer edit section *** (Гости.Фамилия CustomAttributes)
        [StrLen(255)]
        public virtual string Фамилия
        {
            get
            {
                // *** Start programmer edit section *** (Гости.Фамилия Get start)

                // *** End programmer edit section *** (Гости.Фамилия Get start)
                string result = this.fФамилия;
                // *** Start programmer edit section *** (Гости.Фамилия Get end)

                // *** End programmer edit section *** (Гости.Фамилия Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Гости.Фамилия Set start)

                // *** End programmer edit section *** (Гости.Фамилия Set start)
                this.fФамилия = value;
                // *** Start programmer edit section *** (Гости.Фамилия Set end)

                // *** End programmer edit section *** (Гости.Фамилия Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.OtelKursach3.Доступ.
        /// </summary>
        // *** Start programmer edit section *** (Гости.Доступ CustomAttributes)

        // *** End programmer edit section *** (Гости.Доступ CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Доступ"})]
        public virtual IIS.OtelKursach3.Доступ Доступ
        {
            get
            {
                // *** Start programmer edit section *** (Гости.Доступ Get start)

                // *** End programmer edit section *** (Гости.Доступ Get start)
                IIS.OtelKursach3.Доступ result = this.fДоступ;
                // *** Start programmer edit section *** (Гости.Доступ Get end)

                // *** End programmer edit section *** (Гости.Доступ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Гости.Доступ Set start)

                // *** End programmer edit section *** (Гости.Доступ Set start)
                this.fДоступ = value;
                // *** Start programmer edit section *** (Гости.Доступ Set end)

                // *** End programmer edit section *** (Гости.Доступ Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ГостиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ГостиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ГостиE", typeof(IIS.OtelKursach3.Гости));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Гости.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfГости CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfГости CustomAttributes)
    public class DetailArrayOfГости : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.OtelKursach3.DetailArrayOfГости members)

        // *** End programmer edit section *** (IIS.OtelKursach3.DetailArrayOfГости members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Гости by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Гости.
        /// </summary>
        public DetailArrayOfГости(IIS.OtelKursach3.Доступ fДоступ) : 
                base(typeof(Гости), ((ICSSoft.STORMNET.DataObject)(fДоступ)))
        {
        }
        
        public IIS.OtelKursach3.Гости this[int index]
        {
            get
            {
                return ((IIS.OtelKursach3.Гости)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.OtelKursach3.Гости dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
