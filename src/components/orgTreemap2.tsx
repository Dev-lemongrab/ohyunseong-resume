"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";

const Plot: any = dynamic(() => import("react-plotly.js"), { ssr: false });

type Row = {
  node_level: "parent" | "child";
  id: string;
  parent_id: string | null;
  name: string;
  text_cnt: string;
  val: number;
};

const rows: Row[] = [
  // parents
  { node_level: "parent", id: "S_1", parent_id: null, name: "ONE AI", text_cnt: "(7.5%, 30.5명)", val: 7.540212819 },
  { node_level: "parent", id: "S_10", parent_id: null, name: "정밀의료플랫폼", text_cnt: "(12.4%, 50.1명)", val: 12.397921307 },
  { node_level: "parent", id: "S_11", parent_id: null, name: "의료마이데이터", text_cnt: "(1.3%, 5.3명)", val: 1.311556545 },
  { node_level: "parent", id: "S_12", parent_id: null, name: "MLops 플랫폼", text_cnt: "(2.3%, 9.4명)", val: 2.313783717 },
  { node_level: "parent", id: "S_13", parent_id: null, name: "WEHAGO Infra (IaaS)", text_cnt: "(0.6%, 2.3명)", val: 0.561742143 },
  { node_level: "parent", id: "S_14", parent_id: null, name: "금융플랫폼 /금융마이데이터", text_cnt: "(0.8%, 3.3명)", val: 0.816629547 },
  { node_level: "parent", id: "S_15", parent_id: null, name: "WEHAGO V", text_cnt: "(1.5%, 6.1명)", val: 1.49715417 },
  { node_level: "parent", id: "S_16", parent_id: null, name: "지자체플랫폼", text_cnt: "(0.4%, 1.5명)", val: 0.361296709 },
  { node_level: "parent", id: "S_17", parent_id: null, name: "채용플랫폼", text_cnt: "(0.6%, 2.2명)", val: 0.554318238 },
  { node_level: "parent", id: "S_18", parent_id: null, name: "R&D 플랫폼", text_cnt: "(0.4%, 1.5명)", val: 0.361296709 },
  { node_level: "parent", id: "S_19", parent_id: null, name: "사업기획운영", text_cnt: "(3.9%, 15.7명)", val: 3.885176936 },
  { node_level: "parent", id: "S_2", parent_id: null, name: "Smart A", text_cnt: "(1.5%, 6.3명)", val: 1.549121505 },
  { node_level: "parent", id: "S_3", parent_id: null, name: "Smart A 10", text_cnt: "(13.9%, 56.3명)", val: 13.942093541 },
  { node_level: "parent", id: "S_4", parent_id: null, name: "WEHAGO", text_cnt: "(19.1%, 77.2명)", val: 19.101707498 },
  { node_level: "parent", id: "S_5", parent_id: null, name: "WEHAGO T", text_cnt: "(5.2%, 21.2명)", val: 5.248700817 },
  { node_level: "parent", id: "S_6", parent_id: null, name: "T edge/NAHAGO", text_cnt: "(5.4%, 21.7명)", val: 5.372432566 },
  { node_level: "parent", id: "S_7", parent_id: null, name: "반려동물헬스케어", text_cnt: "(2.4%, 9.7명)", val: 2.388022767 },
  { node_level: "parent", id: "S_8", parent_id: null, name: "2차병원 EMR", text_cnt: "(11.7%, 47.4명)", val: 11.717396684 },
  { node_level: "parent", id: "S_9", parent_id: null, name: "WEHAGO H", text_cnt: "(9.1%, 36.7명)", val: 9.079435783 },

  // children - S_1
  { node_level: "child", id: "S_1_JG_2", parent_id: "S_1", name: "기획/설계", text_cnt: "(18.9%, 5.8명)", val: 18.871020676 },
  { node_level: "child", id: "S_1_JG_3", parent_id: "S_1", name: "개발", text_cnt: "(37.4%, 11.4명)", val: 37.413849688 },
  { node_level: "child", id: "S_1_JG_4", parent_id: "S_1", name: "QA", text_cnt: "(3.2%, 1.0명)", val: 3.18345914 },
  { node_level: "child", id: "S_1_JG_5", parent_id: "S_1", name: "CS", text_cnt: "(12.8%, 3.9명)", val: 12.83229406 },
  { node_level: "child", id: "S_1_JG_6", parent_id: "S_1", name: "사업기획운영", text_cnt: "(3.1%, 0.9명)", val: 3.085001641 },
  { node_level: "child", id: "S_1_JG_7", parent_id: "S_1", name: "엔지니어", text_cnt: "(2.0%, 0.6명)", val: 1.969149984 },
  { node_level: "child", id: "S_1_JG_8", parent_id: "S_1", name: "분석가", text_cnt: "(22.6%, 6.9명)", val: 22.645224811 },

  // children - S_10
  { node_level: "child", id: "S_10_JG_2", parent_id: "S_10", name: "기획/설계", text_cnt: "(14.4%, 7.2명)", val: 14.371257485 },
  { node_level: "child", id: "S_10_JG_3", parent_id: "S_10", name: "개발", text_cnt: "(58.8%, 29.5명)", val: 58.842315369 },
  { node_level: "child", id: "S_10_JG_4", parent_id: "S_10", name: "QA", text_cnt: "(2.8%, 1.4명)", val: 2.834331337 },
  { node_level: "child", id: "S_10_JG_6", parent_id: "S_10", name: "사업기획운영", text_cnt: "(14.9%, 7.5명)", val: 14.870259481 },
  { node_level: "child", id: "S_10_JG_7", parent_id: "S_10", name: "엔지니어", text_cnt: "(4.3%, 2.2명)", val: 4.291417166 },
  { node_level: "child", id: "S_10_JG_8", parent_id: "S_10", name: "분석가", text_cnt: "(4.8%, 2.4명)", val: 4.790419162 },

  // children - S_11
  { node_level: "child", id: "S_11_JG_2", parent_id: "S_11", name: "기획/설계", text_cnt: "(2.8%, 0.2명)", val: 2.830188679 },
  { node_level: "child", id: "S_11_JG_3", parent_id: "S_11", name: "개발", text_cnt: "(30.2%, 1.6명)", val: 30.188679245 },
  { node_level: "child", id: "S_11_JG_4", parent_id: "S_11", name: "QA", text_cnt: "(1.9%, 0.1명)", val: 1.886792453 },
  { node_level: "child", id: "S_11_JG_6", parent_id: "S_11", name: "사업기획운영", text_cnt: "(51.9%, 2.8명)", val: 51.886792453 },
  { node_level: "child", id: "S_11_JG_7", parent_id: "S_11", name: "엔지니어", text_cnt: "(13.2%, 0.7명)", val: 13.20754717 },

  // children - S_12
  { node_level: "child", id: "S_12_JG_2", parent_id: "S_12", name: "기획/설계", text_cnt: "(0.5%, 0.1명)", val: 0.534759358 },
  { node_level: "child", id: "S_12_JG_3", parent_id: "S_12", name: "개발", text_cnt: "(40.1%, 3.8명)", val: 40.106951872 },
  { node_level: "child", id: "S_12_JG_4", parent_id: "S_12", name: "QA", text_cnt: "(1.1%, 0.1명)", val: 1.069518717 },
  { node_level: "child", id: "S_12_JG_6", parent_id: "S_12", name: "사업기획운영", text_cnt: "(2.7%, 0.3명)", val: 2.673796791 },
  { node_level: "child", id: "S_12_JG_7", parent_id: "S_12", name: "엔지니어", text_cnt: "(40.6%, 3.8명)", val: 40.64171123 },
  { node_level: "child", id: "S_12_JG_8", parent_id: "S_12", name: "분석가", text_cnt: "(15.0%, 1.4명)", val: 14.973262032 },

  // children - S_13
  { node_level: "child", id: "S_13_JG_3", parent_id: "S_13", name: "개발", text_cnt: "(39.6%, 0.9명)", val: 39.647577093 },
  { node_level: "child", id: "S_13_JG_4", parent_id: "S_13", name: "QA", text_cnt: "(0.9%, 0.0명)", val: 0.881057269 },
  { node_level: "child", id: "S_13_JG_6", parent_id: "S_13", name: "사업기획운영", text_cnt: "(28.6%, 0.7명)", val: 28.634361233 },
  { node_level: "child", id: "S_13_JG_7", parent_id: "S_13", name: "엔지니어", text_cnt: "(30.8%, 0.7명)", val: 30.837004405 },

  // children - S_14
  { node_level: "child", id: "S_14_JG_2", parent_id: "S_14", name: "기획/설계", text_cnt: "(18.2%, 0.6명)", val: 18.181818182 },
  { node_level: "child", id: "S_14_JG_3", parent_id: "S_14", name: "개발", text_cnt: "(41.8%, 1.4명)", val: 41.818181818 },
  { node_level: "child", id: "S_14_JG_4", parent_id: "S_14", name: "QA", text_cnt: "(12.1%, 0.4명)", val: 12.121212121 },
  { node_level: "child", id: "S_14_JG_6", parent_id: "S_14", name: "사업기획운영", text_cnt: "(17.3%, 0.6명)", val: 17.272727273 },
  { node_level: "child", id: "S_14_JG_7", parent_id: "S_14", name: "엔지니어", text_cnt: "(10.6%, 0.4명)", val: 10.606060606 },

  // children - S_15
  { node_level: "child", id: "S_15_JG_2", parent_id: "S_15", name: "기획/설계", text_cnt: "(0.8%, 0.1명)", val: 0.826446281 },
  { node_level: "child", id: "S_15_JG_3", parent_id: "S_15", name: "개발", text_cnt: "(45.5%, 2.8명)", val: 45.454545455 },
  { node_level: "child", id: "S_15_JG_4", parent_id: "S_15", name: "QA", text_cnt: "(14.2%, 0.9명)", val: 14.214876033 },
  { node_level: "child", id: "S_15_JG_6", parent_id: "S_15", name: "사업기획운영", text_cnt: "(27.9%, 1.7명)", val: 27.933884298 },
  { node_level: "child", id: "S_15_JG_7", parent_id: "S_15", name: "엔지니어", text_cnt: "(11.6%, 0.7명)", val: 11.570247934 },

  // children - S_16
  { node_level: "child", id: "S_16_JG_2", parent_id: "S_16", name: "기획/설계", text_cnt: "(3.4%, 0.1명)", val: 3.424657534 },
  { node_level: "child", id: "S_16_JG_3", parent_id: "S_16", name: "개발", text_cnt: "(52.1%, 0.8명)", val: 52.054794521 },
  { node_level: "child", id: "S_16_JG_4", parent_id: "S_16", name: "QA", text_cnt: "(13.7%, 0.2명)", val: 13.698630137 },
  { node_level: "child", id: "S_16_JG_5", parent_id: "S_16", name: "CS", text_cnt: "(1.4%, 0.0명)", val: 1.369863014 },
  { node_level: "child", id: "S_16_JG_6", parent_id: "S_16", name: "사업기획운영", text_cnt: "(5.5%, 0.1명)", val: 5.479452055 },
  { node_level: "child", id: "S_16_JG_7", parent_id: "S_16", name: "엔지니어", text_cnt: "(24.0%, 0.4명)", val: 23.97260274 },

  // children - S_17
  { node_level: "child", id: "S_17_JG_2", parent_id: "S_17", name: "기획/설계", text_cnt: "(4.5%, 0.1명)", val: 4.464285714 },
  { node_level: "child", id: "S_17_JG_3", parent_id: "S_17", name: "개발", text_cnt: "(62.9%, 1.4명)", val: 62.946428571 },
  { node_level: "child", id: "S_17_JG_4", parent_id: "S_17", name: "QA", text_cnt: "(11.2%, 0.3명)", val: 11.160714286 },
  { node_level: "child", id: "S_17_JG_6", parent_id: "S_17", name: "사업기획운영", text_cnt: "(5.8%, 0.1명)", val: 5.803571429 },
  { node_level: "child", id: "S_17_JG_7", parent_id: "S_17", name: "엔지니어", text_cnt: "(15.6%, 0.4명)", val: 15.625 },

  // children - S_18
  { node_level: "child", id: "S_18_JG_3", parent_id: "S_18", name: "개발", text_cnt: "(44.5%, 0.7명)", val: 44.520547945 },
  { node_level: "child", id: "S_18_JG_4", parent_id: "S_18", name: "QA", text_cnt: "(20.5%, 0.3명)", val: 20.547945205 },
  { node_level: "child", id: "S_18_JG_6", parent_id: "S_18", name: "사업기획운영", text_cnt: "(11.0%, 0.2명)", val: 10.95890411 },
  { node_level: "child", id: "S_18_JG_7", parent_id: "S_18", name: "엔지니어", text_cnt: "(24.0%, 0.4명)", val: 23.97260274 },

  // children - S_19
  { node_level: "child", id: "S_19_JG_2", parent_id: "S_19", name: "기획/설계", text_cnt: "(6.4%, 1.0명)", val: 6.369426752 },
  { node_level: "child", id: "S_19_JG_6", parent_id: "S_19", name: "사업기획운영", text_cnt: "(93.0%, 14.6명)", val: 92.993630573 },
  { node_level: "child", id: "S_19_JG_7", parent_id: "S_19", name: "엔지니어", text_cnt: "(0.6%, 0.1명)", val: 0.636942675 },

  // children - S_2
  { node_level: "child", id: "S_2_JG_2", parent_id: "S_2", name: "기획/설계", text_cnt: "(21.9%, 1.4명)", val: 21.884984026 },
  { node_level: "child", id: "S_2_JG_3", parent_id: "S_2", name: "개발", text_cnt: "(74.3%, 4.7명)", val: 74.28115016 },
  { node_level: "child", id: "S_2_JG_6", parent_id: "S_2", name: "사업기획운영", text_cnt: "(3.8%, 0.2명)", val: 3.833865815 },

  // children - S_3
  { node_level: "child", id: "S_3_JG_2", parent_id: "S_3", name: "기획/설계", text_cnt: "(12.7%, 7.2명)", val: 12.690805822 },
  { node_level: "child", id: "S_3_JG_3", parent_id: "S_3", name: "개발", text_cnt: "(28.8%, 16.2명)", val: 28.75399361 },
  { node_level: "child", id: "S_3_JG_5", parent_id: "S_3", name: "CS", text_cnt: "(55.0%, 31.0명)", val: 55.023074192 },
  { node_level: "child", id: "S_3_JG_6", parent_id: "S_3", name: "사업기획운영", text_cnt: "(1.5%, 0.8명)", val: 1.490947817 },
  { node_level: "child", id: "S_3_JG_7", parent_id: "S_3", name: "엔지니어", text_cnt: "(1.7%, 1.0명)", val: 1.686190983 },
  { node_level: "child", id: "S_3_JG_8", parent_id: "S_3", name: "분석가", text_cnt: "(0.4%, 0.2명)", val: 0.354987575 },

  // children - S_4
  { node_level: "child", id: "S_4_JG_2", parent_id: "S_4", name: "기획/설계", text_cnt: "(10.8%, 8.3명)", val: 10.752688172 },
  { node_level: "child", id: "S_4_JG_3", parent_id: "S_4", name: "개발", text_cnt: "(59.0%, 45.5명)", val: 58.971369348 },
  { node_level: "child", id: "S_4_JG_4", parent_id: "S_4", name: "QA", text_cnt: "(9.1%, 7.0명)", val: 9.055577147 },
  { node_level: "child", id: "S_4_JG_5", parent_id: "S_4", name: "CS", text_cnt: "(16.2%, 12.5명)", val: 16.232672626 },
  { node_level: "child", id: "S_4_JG_6", parent_id: "S_4", name: "사업기획운영", text_cnt: "(3.4%, 2.7명)", val: 3.433087187 },
  { node_level: "child", id: "S_4_JG_7", parent_id: "S_4", name: "엔지니어", text_cnt: "(1.4%, 1.1명)", val: 1.425055059 },
  { node_level: "child", id: "S_4_JG_8", parent_id: "S_4", name: "분석가", text_cnt: "(0.1%, 0.1명)", val: 0.12955046 },

  // children - S_5
  { node_level: "child", id: "S_5_JG_2", parent_id: "S_5", name: "기획/설계", text_cnt: "(15.2%, 3.2명)", val: 15.228665724 },
  { node_level: "child", id: "S_5_JG_3", parent_id: "S_5", name: "개발", text_cnt: "(46.7%, 9.9명)", val: 46.676096181 },
  { node_level: "child", id: "S_5_JG_4", parent_id: "S_5", name: "QA", text_cnt: "(5.2%, 1.1명)", val: 5.186232909 },
  { node_level: "child", id: "S_5_JG_5", parent_id: "S_5", name: "CS", text_cnt: "(26.5%, 5.6명)", val: 26.54408298 },
  { node_level: "child", id: "S_5_JG_6", parent_id: "S_5", name: "사업기획운영", text_cnt: "(4.7%, 1.0명)", val: 4.71475719 },
  { node_level: "child", id: "S_5_JG_7", parent_id: "S_5", name: "엔지니어", text_cnt: "(1.7%, 0.4명)", val: 1.650165017 },

  // children - S_6
  { node_level: "child", id: "S_6_JG_2", parent_id: "S_6", name: "기획/설계", text_cnt: "(8.5%, 1.9명)", val: 8.521418701 },
  { node_level: "child", id: "S_6_JG_3", parent_id: "S_6", name: "개발", text_cnt: "(48.4%, 10.5명)", val: 48.410870567 },
  { node_level: "child", id: "S_6_JG_4", parent_id: "S_6", name: "QA", text_cnt: "(4.8%, 1.1명)", val: 4.836480884 },
  { node_level: "child", id: "S_6_JG_5", parent_id: "S_6", name: "CS", text_cnt: "(35.5%, 7.7명)", val: 35.467526485 },
  { node_level: "child", id: "S_6_JG_6", parent_id: "S_6", name: "사업기획운영", text_cnt: "(1.2%, 0.3명)", val: 1.151543068 },
  { node_level: "child", id: "S_6_JG_7", parent_id: "S_6", name: "엔지니어", text_cnt: "(1.6%, 0.4명)", val: 1.612160295 },

  // children - S_7
  { node_level: "child", id: "S_7_JG_2", parent_id: "S_7", name: "기획/설계", text_cnt: "(32.6%, 3.2명)", val: 32.642487047 },
  { node_level: "child", id: "S_7_JG_3", parent_id: "S_7", name: "개발", text_cnt: "(63.7%, 6.2명)", val: 63.730569948 },
  { node_level: "child", id: "S_7_JG_7", parent_id: "S_7", name: "엔지니어", text_cnt: "(3.6%, 0.4명)", val: 3.626943005 },

  // children - S_8
  { node_level: "child", id: "S_8_JG_2", parent_id: "S_8", name: "기획/설계", text_cnt: "(43.7%, 20.7명)", val: 43.717001056 },
  { node_level: "child", id: "S_8_JG_3", parent_id: "S_8", name: "개발", text_cnt: "(55.5%, 26.3명)", val: 55.543822598 },
  { node_level: "child", id: "S_8_JG_7", parent_id: "S_8", name: "엔지니어", text_cnt: "(0.7%, 0.4명)", val: 0.739176346 },

  // children - S_9
  { node_level: "child", id: "S_9_JG_2", parent_id: "S_9", name: "기획/설계", text_cnt: "(25.3%, 9.3명)", val: 25.347506132 },
  { node_level: "child", id: "S_9_JG_3", parent_id: "S_9", name: "개발", text_cnt: "(67.6%, 24.8명)", val: 67.566094304 },
  { node_level: "child", id: "S_9_JG_4", parent_id: "S_9", name: "QA", text_cnt: "(0.7%, 0.2명)", val: 0.654129191 },
  { node_level: "child", id: "S_9_JG_5", parent_id: "S_9", name: "CS", text_cnt: "(0.6%, 0.2명)", val: 0.572363042 },
  { node_level: "child", id: "S_9_JG_6", parent_id: "S_9", name: "사업기획운영", text_cnt: "(4.8%, 1.8명)", val: 4.769692014 },
  { node_level: "child", id: "S_9_JG_7", parent_id: "S_9", name: "엔지니어", text_cnt: "(1.1%, 0.4명)", val: 1.090215318 },
];



function parseTextCnt(text_cnt: string) {
  // "(19.1%, 77.2명)" -> { percent: 19.1, headcount: 77.2 }
  const cleaned = text_cnt.replace(/[()]/g, "").trim(); // "19.1%, 77.2명"
  const [p, c] = cleaned.split(",").map((s) => s.trim());
  const percent = Number(p.replace("%", "").trim());
  const headcount = Number(c.replace("명", "").trim());
  return {
    percent: Number.isFinite(percent) ? percent : 0,
    headcount: Number.isFinite(headcount) ? headcount : 0,
  };
}

type Node = {
  id: string;
  label: string;
  parentId: string; // "" root
  percent: number; // 표시용 %
  headcount: number; // 표시용 명수
  plotValue: number; // 면적용 값
};

function buildTreemapNodes(rows: Row[]): Node[] {
  let nodes: Node[] = rows.map((r) => {
    const { percent, headcount } = parseTextCnt(r.text_cnt);
    const isChild = r.node_level === "child";
    return {
      id: r.id,
      label: isChild ? `${r.name}` : r.name,
      parentId: isChild ? r.parent_id ?? "" : "",
      percent,
      headcount,
      plotValue: 0, // 나중에 계산
    };
  });

  const rebuildChildrenMap = () => {
    const map = new Map<string, Node[]>();
    for (const n of nodes) {
      if (!map.has(n.parentId)) map.set(n.parentId, []);
      map.get(n.parentId)!.push(n);
    }
    return map;
  };

  // leaf: 면적 = headcount (명수)
  for (const n of nodes) {
    const children = (rebuildChildrenMap().get(n.id) ?? []);
    if (children.length === 0) n.plotValue = n.headcount;
  }

  // 부모: 자식합 vs 부모명수 비교 후 잔여 노드 추가
  for (let loop = 0; loop < 6; loop++) {
    const ch = rebuildChildrenMap();

    for (const p of [...nodes]) {
      const children = ch.get(p.id) ?? [];
      if (children.length === 0) continue;

      const sum = children.reduce((a, c) => a + c.plotValue, 0);
      const parentCnt = p.headcount;

      // branchvalues="total"에서 부모 < 자식합이면 경고/공백 생김 → 최소 자식합 보장
      p.plotValue = Math.max(parentCnt, sum);

      // 부모가 더 크면(diff)만큼 "잔여"로 채워서 공백 제거
      const diff = parentCnt - sum;
      const rid = `${p.id}||__remainder`;

      nodes = nodes.filter((n) => n.id !== rid);

      if (diff > 0) {
        nodes.push({
          id: rid,
          label: "잔여",
          parentId: p.id,
          percent: 0,
          headcount: diff,
          plotValue: diff,
        });
      }
    }
  }

  return nodes;
}

export default function ServiceContributionTreemap() {
  const { ids, labels, parents, values, customdata } = useMemo(() => {
    const parentNameById = new Map<string, string>();
    rows
        .filter((r) => r.node_level === "parent")
        .forEach((r) => parentNameById.set(r.id, r.name));

    const nodes = buildTreemapNodes(rows);

    // 3) Plotly 입력
    const ids = nodes.map((n) => n.id);
    const labels = nodes.map((n) => n.label);
    const parents = nodes.map((n) => n.parentId);
    const values = nodes.map((n) => n.plotValue);
    const customdata = nodes.map((n) => [n.percent, n.headcount]);
    return { ids, labels, parents, values, customdata };
  }, []);

  return (
      <Plot
          data={[
            {
              type: "treemap",
              ids,
              labels,
              parents,
              values,
              branchvalues: "total",
              sort :true,

              customdata,
              texttemplate: "%{label}<br>(%{customdata[0]:.1f}%, %{customdata[1]:.1f}명)",
              textinfo: "text",
              hovertemplate:
                  "<b>%{label}</b><br>" +
                  "비율: %{customdata[0]:.1f}%<br>" +
                  "명수: %{customdata[1]:.1f}명<br>" +
                  "면적값: %{value:.2f}<extra></extra>",
            },
          ]}
          layout={{
            title: "서비스 기여도 트리맵 (서비스 → 업무코드)",
            uniformtext: { minsize: 9, mode: "show" },
            margin: { t: 50, l: 20, r: 20, b: 20 },
          }}
          style={{ width: "100%", height: "800px" }}
          config={{ responsive: true, displayModeBar: false }}
      />
  );
}