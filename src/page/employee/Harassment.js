import React from 'react'
import classNames from 'classnames'
import styles from '../../style/employee/Harassment.module.css'
import commonStyles from '../../style/Common.module.css'
import Categorys from '../../component/Categorys'


const Harassment = () => {
    return (
        <div>
            <div className={classNames(styles.sec1, commonStyles.flexCenter)}>
                <p className={styles.title}>
                    <span>‘여러분의 가치를 소중하게 보호’</span> 하는 노무법인 <span>이음</span>
                </p>
                <p className={styles.description}>
                    괴롭힘, 따돌림, 성희롱 등을 당했을 때 기본 권리를 스스로 지켜야 합니다.
                </p>
            </div>
            <Categorys url='harassment' />
            <div className={classNames(styles.sec2, commonStyles.layout)}>
                <div className={styles.contentContainer}>
                    <div className={styles.img}></div>
                    <div className={styles.text}>
                        <div>
                            <p className={styles.title}>
                                <span>직장 내 괴롭힘</span>이란?
                            </p>
                            <p className={styles.description}>
                                <p>사용자 또는 근로자가 직장에서의 직급 또는 관계 등의</p>
                                <p>우위를 이용하여 업무상 적정 범위를 넘어</p>
                                <p>다른 근로자에게 신체적, 정신적 고통을 주거나</p>
                                <p>근무 환경을 악화 시키는 행위입니다.</p>
                            </p>
                        </div>
                        <div>
                            <p className={styles.title}>
                                직장 내 괴롭힘 <span>대응 처리 절차</span>
                            </p>
                            <ul className={styles.description}>
                                <li>① 고소 접수</li>
                                <li>② 면담을 통한 피해 사례 파악</li>
                                <li>③ 파악 된 내용을 토대로 조사 착수</li>
                                <li>④ 대응 및 조치</li>
                                <li>⑤ 지속적인 모니터링 및 관리</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sec3}>
                <div className={classNames(styles.contentContainer, commonStyles.layout)}>
                    <div className={styles.text}>
                        <div>
                            <p className={styles.title}>
                                직장 내 <span>성희롱이란?</span>
                            </p>
                            <p className={styles.description}>
                                <p>사업주, 상급자, 동료 등이 다른 근로자에게 성적인</p>
                                <p>언행으로 성적 수치심 또는 혐오감을 느끼게 했을 경우와</p>
                                <p>성적인 요구에 따르지 아니하였다는 이유로</p>
                                <p>근로 환경 및 고용 등에 불이익을 주는 경우입니다.</p>
                            </p>
                        </div>
                        <div>
                            <p className={styles.title}>
                                직장 내 <span>성희롱 대처 방안</span>
                            </p>
                            <ul className={styles.description}>
                                <li>① 문제 발생 시 증거 수집 (문서화)</li>
                                <li>② 직장 내 내부 절차 활용하기</li>
                                <li>③ 법적 대응하기</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.img}></div>
                </div>
            </div>
            <div className={classNames(styles.sec4, commonStyles.layout)}>
                <div className={styles.contentContainer}>
                    <div className={styles.img}></div>
                    <div className={styles.text}>
                        <div>
                            <p className={styles.title}>
                                <span>비정규직 차별</span>이란?
                            </p>
                            <p className={styles.description}>
                                <p>사용자가 비정규직근로자(기간제/단시간/파견근로자)를</p>
                                <p>비교대상근로자(무기계약 근로자/통상근로자/</p>
                                <p>직접고용근로자)에 비하여 임금 그 밖의 근로조건 등에</p>
                                <p>있어서 합리적인 이유 없이 불리하게 처우하는</p>
                                <p>경우 노동위원회에 그 시정을 신청할 수 있습니다.</p>
                            </p>
                        </div>
                        <div>
                            <p className={styles.title}>
                                비정규직 <span>차별 금지 영역</span>
                            </p>
                            <ul className={styles.description}>
                                <li>① 임금</li>
                                <li>
                                    <p>② 정기상여금, 명절상여금 등 정기적으로</p>
                                    <p>지급되는 상여금</p>
                                </li>
                                <li>③ 경영 성과에 따른 성과금</li>
                                <li>④ 그 밖에 근로 조건 및 복리후생 등에 관한 사항</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classNames(styles.sec5, commonStyles.flexCenter)}>
                <p>노무법인 이음과 함께라면 이겨낼 수 있습니다.</p>
            </div>
        </div>
    )
}

export default Harassment